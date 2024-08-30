// src/components/Container.tsx
import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system';

interface ContainerProps extends SpaceProps, LayoutProps, ColorProps {}

const Container = styled.div<ContainerProps>`
  width: 96%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  ${space}
  ${layout}
  ${color}
`;

export default Container;
