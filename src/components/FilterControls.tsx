/** @jsxImportSource @emotion/react */
import React from 'react';
import { controlStyle, selectStyle } from '@/styles/styles';

interface FilterControlsProps {
  genre: string;
  artist: string;
  album: string;
  genres: string[];
  artists: string[];
  albums: string[];
  onFilterChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  genre,
  artist,
  album,
  genres,
  artists,
  albums,
  onFilterChange,
}) => {
  return (
    <div css={controlStyle}>
      {/* <Input
        type="text"
        placeholder="Search by title..."
        name="title"
        value={title}
        onChange={onFilterChange}
      /> */}
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
    </div>
  );
};

export default FilterControls;
