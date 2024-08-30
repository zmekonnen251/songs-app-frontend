import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from '@/services/api';
import {
  addSong,
  removeSong,
  setSongs,
  setStats,
  updateSongInStore,
} from './songSlice';
import type { FetchSongsResponse, Song, SongStats } from '../types';
import * as actions from './actionTypes';
// Fetch songs saga
function* fetchSongs(action: {
  type: string;
  payload: Record<string, string | number | boolean>;
}): Generator<unknown, void, { data: FetchSongsResponse }> {
  try {
    // Convert payload values to strings
    const queryString = new URLSearchParams(
      Object.entries(action.payload).reduce(
        (acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        },
        {} as Record<string, string>,
      ),
    ).toString();
    const response = yield call(
      API.get,
      `/api/songs${queryString ? '?' + queryString : ''}`,
    );
    yield put(setSongs(response.data));
  } catch {
    // console.error('Error fetching songs', error);
  }
}

// Fetch stats saga
function* fetchStats(): Generator<unknown, void, { data: SongStats }> {
  try {
    const response = yield call(API.get, '/api/stats');
    yield put(setStats(response.data));
  } catch {
    // console.error('Error fetching stats', error);
  }
}
// Update song saga
function* updateSong(action: {
  type: string;
  payload: { id: string; data: Partial<Song> };
}): Generator<unknown, void, { data: Song }> {
  try {
    const { id, data } = action.payload;
    const response = yield call(API.put, `/api/songs/${id}`, data);
    yield put(updateSongInStore(response.data));
    yield call(fetchStats);
  } catch {
    // console.error('Error updating song', error);
  }
}
// Create song saga
function* createSong(action: {
  type: string;
  payload: Song;
}): Generator<unknown, void, { data: Song }> {
  try {
    const response = yield call(API.post, '/api/songs', action.payload);
    yield put(addSong(response.data));
    yield call(fetchStats);
  } catch {
    // console.error('Error creating song', error);
  }
}

// Delete song saga
function* deleteSong(action: {
  type: string;
  payload: { id: string };
}): Generator<unknown, void, { data: { id: string } }> {
  try {
    const { id } = action.payload;
    yield call(API.delete, `/api/songs/${id}`);
    yield put(removeSong(id));
    yield call(fetchStats);
  } catch {
    // console.error('Error deleting song', error);
  }
}
// Root saga
function* rootSaga() {
  yield takeEvery(actions.FETCH_SONGS, fetchSongs);
  yield takeEvery(actions.FETCH_STATS, fetchStats);
  yield takeEvery(actions.CREATE_SONG, createSong);
  yield takeEvery(actions.UPDATE_SONG, updateSong);
  yield takeEvery(actions.DELETE_SONG, deleteSong);
}

export default rootSaga;
