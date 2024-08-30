import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    primary: '#007bff', // Bright blue for primary actions
    secondary: '#6c757d', // Gray for secondary actions
    success: '#28a745', // Green for success messages
    danger: '#dc3545', // Red for error messages
    background: '#ffffff', // White for background
    text: '#212529', // Dark gray for text
    white: '#ffffff', // White color
  },
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  radii: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)', // Softer shadow
    medium: '0 6px 12px rgba(0, 0, 0, 0.15)', // Medium shadow
    large: '0 12px 24px rgba(0, 0, 0, 0.2)', // More pronounced shadow
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#1e90ff', // Lighter blue for better contrast
    secondary: '#6c757d', // Gray for secondary actions
    success: '#32cd32', // Lighter green for success messages
    danger: '#ff6347', // Tomato red for error messages
    background: '#1e1e1e', // Dark gray background
    text: '#e0e0e0', // Light gray text
    white: '#ffffff', // White color
  },
  space: lightTheme.space, // Use same spacing as light theme
  fontSizes: lightTheme.fontSizes, // Use same font sizes as light theme
  radii: lightTheme.radii, // Use same radii as light theme
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)', // Stronger shadow
    medium: '0 6px 12px rgba(0, 0, 0, 0.25)', // More pronounced shadow
    large: '0 12px 24px rgba(0, 0, 0, 0.3)', // Deeper shadow
  },
};
