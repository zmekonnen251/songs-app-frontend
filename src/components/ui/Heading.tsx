/** @jsxImportSource @emotion/react */
import { headingStyle } from '@/styles/styles';

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 css={headingStyle}>{children}</h1>;
};

export default Heading;
