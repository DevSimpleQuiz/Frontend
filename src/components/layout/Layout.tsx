import styled from 'styled-components';
import Header from '../common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  )
};

const LayoutWrapper = styled.main`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

export default Layout;