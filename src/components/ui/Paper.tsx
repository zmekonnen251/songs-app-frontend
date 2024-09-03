/** @jsxImportSource @emotion/react */
import { paperStyle, PaperStyleProps } from '@/styles/styles';
import { useTheme } from '@emotion/react';
import React from 'react';

const Paper: React.FC<PaperStyleProps & { children: React.ReactNode }> = (
  props,
) => {
  const theme = useTheme();
  const { children, ...restProps } = props;
  return (
    <div
      css={paperStyle({
        ...restProps,
        theme,
      })}
    >
      {children}
    </div>
  );
};

export default Paper;
