/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ThemeSwitcher from './ThemeSwitcher';
import Heading from './ui/Heading';

const Header: React.FC = () => {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Heading>Songs Library</Heading>
      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
