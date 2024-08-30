// src/App.tsx
import React from 'react';
import SongList from './components/SongList';
import Statistics from './components/Statistics';
import { css, Global, ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { globalStyles } from './styles/styles';
import Header from './components/Header';

const App: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const dynamicStyles = css`
    body {
      background-color: ${isDark ? '#333' : '#f4f4f4'};
      color: ${isDark ? '#f4f4f4' : '#333'};
    }

    /* Other dynamic styles based on theme */
  `;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={[globalStyles, dynamicStyles]} />
      <Header />

      <Statistics />
      <SongList />
    </ThemeProvider>
  );
};

export default App;
