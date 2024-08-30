/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { FaMusic, FaUser, FaCompactDisc, FaListAlt } from 'react-icons/fa';
import * as actions from '@/store/actionTypes';
import {
  badgeStyle,
  statCard,
  statIcon,
  statsContainer,
  statsGrid,
  statText,
} from '@/styles/styles';

const Statistics: React.FC = () => {
  const stats = useSelector((state: RootState) => state.songs.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.FETCH_STATS,
    });
  }, [dispatch]);

  return (
    <div css={statsContainer}>
      <div css={statsGrid}>
        <div css={statCard}>
          <FaMusic css={statIcon} />
          <div css={statText}>
            <p>Total Songs</p>
            <span css={badgeStyle}>{stats.totalSongs}</span>
          </div>
        </div>
        <div css={statCard}>
          <FaUser css={statIcon} />
          <div css={statText}>
            <p>Total Artists</p>
            <span css={badgeStyle}>{stats.totalArtists}</span>
          </div>
        </div>
        <div css={statCard}>
          <FaCompactDisc css={statIcon} />
          <div css={statText}>
            <p>Total Albums</p>
            <span css={badgeStyle}>{stats.totalAlbums}</span>
          </div>
        </div>
        <div css={statCard}>
          <FaListAlt css={statIcon} />
          <div css={statText}>
            <p>Total Genres</p>
            <span css={badgeStyle}>{stats.totalGenres}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
