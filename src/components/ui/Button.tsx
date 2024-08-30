// src/components/Button.tsx
import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  shadow,
  border,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  ShadowProps,
  BorderProps,
} from 'styled-system';
import { Theme } from '@emotion/react'; // Use the existing Theme type from Emotion

interface ButtonProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    ShadowProps,
    BorderProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const buttonVariants = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'secondary',
    color: 'white',
  },
  success: {
    backgroundColor: 'success',
    color: 'white',
  },
  danger: {
    backgroundColor: 'danger',
    color: 'white',
  },
};

const buttonSizes = {
  small: {
    padding: '8px 16px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px 24px',
    fontSize: '16px',
  },
  large: {
    padding: '16px 32px',
    fontSize: '18px',
  },
};

const Button = styled.button<ButtonProps>(
  ({
    theme,
    variant = 'primary',
    size = 'medium',
  }: {
    theme: Theme;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'medium' | 'large';
  }) => ({
    ...buttonVariants[variant],
    ...buttonSizes[size],
    border: 'none',
    borderRadius: theme.radii.medium, // Use theme.radii
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
    color: theme.colors.white,
    backgroundColor: theme.colors[variant],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 4,
    padding: size === 'small' ? '4px 8px' : '8px 16px',
  }),
  space,
  color,
  typography,
  layout,
  shadow,
  border,
);

export default Button;
