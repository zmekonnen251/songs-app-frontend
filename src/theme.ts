import { Theme } from '@emotion/react';

const baseColors = {
  primary: '#566e3dff', // Green
  secondary: '#223843ff', // Dark gray
  success: '#566e3dff', // Green
  danger: ' #e65f5cff', // Red
  text: '#f6f7ebff', // Light ivory
  background: '#223843ff', // Dark gray
  white: '#ffffff',
};

export const lightTheme: Theme = {
  colors: {
    ...baseColors,
    primary: '#566e3dff', // Green
    background: '#f6f7ebff', // Light ivory
    text: '#223843ff', // Dark gray
  },
  space: [0, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 20, 24],
  radii: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

export const darkTheme: Theme = {
  colors: {
    ...baseColors,
  },
  space: lightTheme.space,
  fontSizes: lightTheme.fontSizes,
  radii: lightTheme.radii,
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.25)',
    large: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
};
