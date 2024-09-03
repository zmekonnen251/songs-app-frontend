/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Divider: React.FC<{
  height?: string;
  color?: string;
}> = ({ height = '0', color = 'transparent' }) => {
  return (
    <div
      css={css`
        height: ${height};
        border-bottom: 1px solid ${color};
      `}
    ></div>
  );
};

export default Divider;
