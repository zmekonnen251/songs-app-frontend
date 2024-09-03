/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const Flex: React.FC<{
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  grow?: number;
  children: React.ReactNode;
}> = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
  grow = 0,
  children,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
        flex-wrap: ${wrap};
        flex-grow: ${grow};
      `}
    >
      {children}
    </div>
  );
};

export default Flex;
