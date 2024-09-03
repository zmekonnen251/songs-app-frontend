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
import Divider from './components/ui/Divider';

const App: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const theme = isDark ? darkTheme : lightTheme;
  const [searchTerm, setSearchTerm] = React.useState('');
  const dynamicStyles = css`
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }

    /* Other dynamic styles based on theme */
  `;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={[globalStyles, dynamicStyles]} />
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Divider height="10px" />
      <Statistics />
      <SongList searchTerm={searchTerm} />
    </ThemeProvider>
  );
};

export default App;
