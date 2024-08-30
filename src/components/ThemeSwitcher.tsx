/** @jsxImportSource @emotion/react */

import { RootState } from '@/store';
import { toggleTheme } from '@/store/themeSlice';
import { css } from '@emotion/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const themeSwitcherContainer = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDark);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div onClick={handleToggle} css={themeSwitcherContainer}>
      {isDarkMode ? (
        <FaSun style={{ ...styles.icon }} />
      ) : (
        <FaMoon style={{ ...styles.icon }} />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
    margin: '0 10px',
    transition: 'opacity 0.3s',
  },
};

export default ThemeSwitcher;
