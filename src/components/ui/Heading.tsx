/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headingStyle = css`
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`;

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 css={headingStyle}>{children}</h1>;
};

export default Heading;
