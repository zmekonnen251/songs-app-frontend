/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from './ui/Button';
import FormField from './ui/FormField';
import { Song } from '@/types';
import * as actions from '@/store/actionTypes';
import { css, Theme } from '@emotion/react';
import { useTheme } from '@emotion/react';

const formStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 90%;
  padding: 16px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.medium};
  box-shadow: ${theme.shadows.medium};

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const buttonContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

interface SongFormProps {
  song?: Song | null;
  onClose: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ song, onClose }) => {
  const [formData, setFormData] = useState<Song>({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (song) {
      setFormData(song);
    }
  }, [song]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (song) {
      dispatch({
        type: actions.UPDATE_SONG,
        payload: {
          id: song._id,
          data: {
            title: formData.title,
            genere: formData.genre,
            artist: formData.artist,
            album: formData.album,
          },
        },
      });
    } else {
      dispatch({ type: actions.CREATE_SONG, payload: formData });
    }
    onClose();
  };

  return (
    <div css={formStyle(theme)}>
      <FormField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <FormField
        label="Artist"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />

      <FormField
        label="Album"
        name="album"
        value={formData.album}
        onChange={handleChange}
      />

      <FormField
        label="Genre"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <div css={buttonContainer}>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SongForm;
