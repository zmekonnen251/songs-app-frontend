/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import ThemeSwitcher from './ThemeSwitcher';
import Heading from './ui/Heading';
import Flex from './ui/Flex';
import Paper from './ui/Paper';
import Button from './ui/Button';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BiPlus } from 'react-icons/bi';
import Modal from './ui/Modal';
import SongForm from './SongForm';

const SearchInput = ({
  isMobile,
  setExpanded,
  expanded,
  showSearch,
  setSearchTerm,
  searchTerm,
}: {
  isMobile: boolean;
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
  showSearch: boolean;
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: ${showSearch ? 'flex' : 'none'};
        width: ${isMobile ? '100%' : '60%'};
        align-items: center;
        gap: ${isMobile ? '0.5rem' : '1rem'};
      `}
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        css={css`
          display: block;
          width: 100%;
          margin-left: ${!isMobile ? '10%' : '0 auto'};
          padding: 0.5rem;
          border: 2px solid ${theme.colors.secondary};
          border-radius: 0.25rem;
          font-size: 1rem;

          border-radius: 0.25rem;

          &:focus {
            outline: none;
            border-color: ${theme.colors.success};
          }

          @media (max-width: 760px) {
            font-size: 0.875rem;
          }
        `}
        type="text"
        placeholder="Search by title..."
      />
      {isMobile && expanded && (
        <Button variant="danger" onClick={() => setExpanded(false)}>
          <MdClose size={20} />
        </Button>
      )}
    </div>
  );
};

const Header = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const theme = useTheme();

  console.log({ isMobile, expanded });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowSearch(expanded || !isMobile);
  }, [expanded, isMobile]);

  return (
    <>
      <Paper theme={theme}>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          gap="0"
          wrap="nowrap"
        >
          {((!expanded && isMobile) || !isMobile) && (
            <Heading>Songs Library 🎵</Heading>
          )}
          <SearchInput
            isMobile
            setExpanded={setExpanded}
            expanded={expanded}
            showSearch={showSearch}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />

          <span
            css={css`
              width: 20px;
            `}
          />
          {((!expanded && isMobile) || !isMobile) && (
            <Flex gap="0.5rem" direction="row" align="center">
              {isMobile && (
                <Button onClick={() => setExpanded(true)}>
                  <FaSearch size={isMobile ? 24 : 20} />
                </Button>
              )}
              <Button onClick={() => setModalOpen(true)} variant="success">
                <BiPlus size={isMobile ? 24 : 20} />
                {isMobile ? null : 'Add'}
              </Button>
              <ThemeSwitcher />
            </Flex>
          )}
        </Flex>
      </Paper>
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          isOpen={isModalOpen}
          title="Create New Song"
        >
          <SongForm onClose={() => setModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Header;
