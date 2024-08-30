import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      background: string;
      text: string;
      white: string;
    };
    space: number[];
    fontSizes: number[];
    radii: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
