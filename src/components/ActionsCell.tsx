/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import Button from './ui/Button';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Song } from '@/types';

interface ActionsCellProps {
  song: Song;
  handleEditSong: (song: Song) => void;
  handleDeleteSong: (id: string) => void;
}

const actionsStyle = css`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const dropdownStyle = css`
  display: none;

  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
`;

const ActionsCell: React.FC<ActionsCellProps> = ({
  song,
  handleEditSong,
  handleDeleteSong,
}) => {
  return (
    <>
      <div css={actionsStyle}>
        <Button onClick={() => handleEditSong(song)} variant="primary">
          <BiEdit size={24} />
          <span
            css={css`
              margin-left: 5px;
            `}
          >
            Edit
          </span>
        </Button>
        <Button
          onClick={() => handleDeleteSong(song._id as string)}
          variant="danger"
        >
          <BiTrash size={24} />
          <span
            css={css`
              margin-left: 5px;
            `}
          >
            Delete
          </span>
        </Button>
      </div>

      <div css={dropdownStyle}>
        <select
          onChange={(e) => {
            const action = e.target.value;
            if (action === 'edit') {
              handleEditSong(song);
            } else if (action === 'delete') {
              handleDeleteSong(song._id as string);
            }
          }}
        >
          <option value="">Actions</option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </>
  );
};

export default ActionsCell;
