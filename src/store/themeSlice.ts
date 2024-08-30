import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  isDark: boolean;
};
const initialState: ThemeState = {
  isDark: localStorage.getItem('isDark') === 'true',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('isDark', state.isDark.toString());
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
