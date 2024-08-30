import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import { FetchSongsResponse, Song, AppState, SongStats } from '../types';

const initialState: AppState = {
  songs: [],
  genres: [],
  artists: [],
  albums: [],
  stats: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    songsByGenre: {},
    songsByArtist: {},
    albumsByArtist: {},
    songsByAlbum: {},
  },
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<FetchSongsResponse>) => {
      state.songs = action.payload.songs;
      state.genres = action.payload.genres;
      state.artists = action.payload.artists;
      state.albums = action.payload.albums;
    },
    setStats: (state, action: PayloadAction<WritableDraft<SongStats>>) => {
      state.stats = action.payload;
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    addSong: (state, action: PayloadAction<WritableDraft<Song>>) => {
      state.songs.push(action.payload);
    },
    updateSongInStore: (state, action: PayloadAction<WritableDraft<Song>>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id,
      );
      state.songs[index] = action.payload;
    },
    removeSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const {
  setSongs,
  setStats,
  deleteSong,
  addSong,
  updateSongInStore,
  removeSong,
} = songSlice.actions;

export default songSlice.reducer;
