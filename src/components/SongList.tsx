/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import Pagination from './ui/Pagination';
import Modal from './ui/Modal';
import SongForm from './SongForm';
import * as actions from '@/store/actionTypes';
import { Song } from '@/types';
import { tableStyle } from '@/styles/styles';
import FilterControls from './FilterControls';
import { useTheme } from '@emotion/react';
import ActionsCell from './ActionsCell';

const SongList: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);
  const artists = useSelector((state: RootState) => state.songs.artists);
  const albums = useSelector((state: RootState) => state.songs.albums);
  const genres = useSelector((state: RootState) => state.songs.genres);

  const totalSongs = useSelector(
    (state: RootState) => state.songs.stats.totalSongs,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [genre, setGenre] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch({
      type: actions.FETCH_SONGS,
      payload: {
        page: currentPage,
        perPage: perPage,
        genre,
        artist,
        album,
        title,
      },
    });
  }, [dispatch, currentPage, genre, artist, album, title, perPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreateSong = () => {
    setSelectedSong(null);
    setModalOpen(true);
  };

  const handleEditSong = (song: Song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleDeleteSong = (id: string) => {
    dispatch({ type: actions.DELETE_SONG, payload: { id } });
  };

  const handlePerPageChange = (perPage: number) => {
    setPerPage(perPage);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'genre') setGenre(value);
    if (name === 'artist') setArtist(value);
    if (name === 'album') setAlbum(value);
    if (name === 'title') setTitle(value);
  };

  return (
    <>
      <table css={tableStyle(theme)}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td colSpan={5}>
              <FilterControls
                title={title}
                genre={genre}
                artist={artist}
                album={album}
                genres={genres}
                artists={artists}
                albums={albums}
                onFilterChange={handleFilterChange}
                onCreateSong={handleCreateSong}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>
                <ActionsCell
                  song={song}
                  handleDeleteSong={handleDeleteSong}
                  handleEditSong={handleEditSong}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalItems={totalSongs}
        itemsPerPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />

      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          isOpen={isModalOpen}
          title="Create New Song"
        >
          <SongForm song={selectedSong} onClose={() => setModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default SongList;
