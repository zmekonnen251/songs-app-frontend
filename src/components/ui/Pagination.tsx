/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, Theme, useTheme } from '@emotion/react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}
const paginationValueText = (theme: Theme) => css`
  color: ${theme.colors.white};
`;

const paginationContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 12px;
  border-top: 1px solid ${theme.colors.secondary};
  background-color: ${theme.colors.background};
  margin-bottom: 16px;
`;

const perPageSelectorStyle = (theme: Theme) => css`
  margin-left: 8px;

  label {
    margin-right: 4px;
    font-weight: 500;
  }

  select {
    padding: 6px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.secondary};
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }
`;

const paginationLeft = css`
  display: flex;
  gap: 12px;
  align-items: center;

  button {
    padding: 8px 16px;
    border-radius: 4px;
  }

  div {
    font-weight: 500;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const theme = useTheme();
  return (
    <div css={paginationContainer}>
      <div css={paginationLeft}>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          variant="primary"
        >
          Previous
        </Button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          variant="primary"
        >
          Next
        </Button>
      </div>
      <div css={perPageSelectorStyle}>
        <label css={paginationValueText(theme)} htmlFor="itemsPerPage">
          Items per page
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          css={css`
            color: white;
          `}
        >
          {[5, 10, 20, 50].map((value) => (
            <option key={value} value={value} css={paginationValueText(theme)}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
