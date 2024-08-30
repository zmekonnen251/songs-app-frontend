/** @jsxImportSource @emotion/react */
import React from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import { controlStyle, selectStyle } from '@/styles/styles';
import { BiPlus } from 'react-icons/bi';

interface FilterControlsProps {
  title: string;
  genre: string;
  artist: string;
  album: string;
  genres: string[];
  artists: string[];
  albums: string[];
  onFilterChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
  onCreateSong: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  title,
  genre,
  artist,
  album,
  genres,
  artists,
  albums,
  onFilterChange,
  onCreateSong,
}) => {
  return (
    <div css={controlStyle}>
      <Input
        type="text"
        placeholder="Search by title..."
        name="title"
        value={title}
        onChange={onFilterChange}
      />
      <select
        css={selectStyle}
        name="genre"
        value={genre}
        onChange={onFilterChange}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        css={selectStyle}
        name="artist"
        value={artist}
        onChange={onFilterChange}
      >
        <option value="">All Artists</option>
        {artists.map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
      <select
        css={selectStyle}
        name="album"
        value={album}
        onChange={onFilterChange}
      >
        <option value="">All Albums</option>
        {albums.map((album) => (
          <option key={album} value={album}>
            {album}
          </option>
        ))}
      </select>
      <Button onClick={onCreateSong} variant="success">
        <BiPlus size={24} />
        Create
      </Button>
    </div>
  );
};

export default FilterControls;
