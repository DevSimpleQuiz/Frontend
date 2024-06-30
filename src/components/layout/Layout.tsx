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
  height: calc(100vh - 64px);
  max-width: 1200px;
  border: 1px solid red;
`;

export default Layout;