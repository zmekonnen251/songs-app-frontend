/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css, Theme } from '@emotion/react';
import { useTheme } from '@emotion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const modalContentStyle = (theme: Theme) => css`
  background: ${theme.colors.background};
  padding: 20px;
  border-radius: ${theme.radii.medium};
  width: 100%;
  max-width: 600px;
  box-shadow: ${theme.shadows.medium};
  position: relative;

  @media (max-width: 600px) {
    padding: 16px;
    max-width: 90%;
  }
`;

const modalHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    margin: 0;
  }
`;

const modalCloseButtonStyle = (theme: Theme) => css`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.text};
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const theme = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <div css={modalOverlayStyle} onClick={onClose}>
      <div css={modalContentStyle(theme)} onClick={(e) => e.stopPropagation()}>
        <div css={modalHeaderStyle}>
          {title && <h2>{title}</h2>}
          <button css={modalCloseButtonStyle(theme)} onClick={onClose}>
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
