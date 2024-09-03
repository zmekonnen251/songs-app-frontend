// styles.ts
import { css, Theme } from '@emotion/react';

export type PaperStyleProps = {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  shadow?: string;
  theme: Theme;
};

export const paperStyle = (props: PaperStyleProps) => css`
  padding: ${props.padding ?? '1rem'};
  margin: ${props.margin ?? '0'};
  background-color: ${props.backgroundColor ??
  `rgba(${props.theme.colors.primary}, 0.1)`};
  border-radius: ${props.borderRadius ?? '4px'};
  box-shadow: ${props.shadow ?? '0 4px 6px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 600px) {
    padding: ${props.padding ?? '0.5rem'};

    border-radius: ${props.borderRadius ?? '2px'};
    box-shadow: ${props.shadow ?? '0 2px 4px rgba(0, 0, 0, 0.1)'};
  }
`;

export const headingStyle = (theme: Theme) => css`
  color: ${theme.colors.primary};
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    line-height: 1.3;
  }
`;

export const tableStyle = (theme: Theme) => css`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${theme.space[2]}px;
  color: ${theme.colors.text};

  th,
  td {
    padding: ${theme.space[2]}px;
    border: 1px solid ${theme.colors.text};
    text-align: left;
    font-size: ${theme.fontSizes[1]}px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 600px) {
      padding: 4px;
    }
  }

  th {
    background-color: ${theme.colors.background};
    font-weight: bold;
    letter-spacing: 0.3em;
    font-size: ${theme.fontSizes[1]}px;
    @media (max-width: 600px) {
      padding: 4px;
    }
  }
`;

export const controlStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    // flex-direction: column;
    gap: 8px;
  }
`;

export const selectStyle = css`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;

  // @media (max-width: 600px) {
  //   width: 100%;
  // }
`;

export const actionsStyle = css`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const statsGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const statsContainer = (theme: Theme) => css`
  margin-top: 16px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  padding: 10px;
  border-radius: 8px;
`;

export const statsTitle = css`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 24px;
`;

export const statCard = css`
  background-color: #3d3d3d;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const statIcon = css`
  font-size: 32px;
  color: #1db954;
`;

export const statText = css`
  flex-grow: 1;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  span {
    font-size: 16px;
    display: block;
    margin-top: 8px;
    color: #ddd;
  }
`;

export const badgeStyle = css`
  background-color: #1db954;
  padding: 6px 12px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  body {
    width: 95%; // Full width by default
    max-width: 1200px; // Maximum width
    margin: 0 auto; // Center align horizontally
    padding: 0 auto; // Default padding

    // Responsive padding
    @media (max-width: 1200px) {
      padding: 0 24px; // Increase padding for larger screens
    }

    @media (max-width: 768px) {
      padding: 0 16px; // Default padding for medium screens
    }

    // Responsive width
    @media (max-width: 480px) {
      padding: 0 8px; // Reduce padding for small screens
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  input,
  button {
    font-family: inherit;
  }
`;
