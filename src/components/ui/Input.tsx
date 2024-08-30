/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  border,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  BorderProps,
} from 'styled-system';

interface InputProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    BorderProps {}

const Input = styled.input<InputProps>`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: ${(props) => props.theme.radii.small};
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  box-sizing: border-box;

  ${space}
  ${color}
  ${typography}
  ${layout}
  ${border}

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 600px) {
    font-size: 14px; // Adjust font size for smaller screens
    padding: 6px 10px;
  }
`;

export default Input;
