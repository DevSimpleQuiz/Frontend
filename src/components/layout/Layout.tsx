import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageWrapper>
      <Header />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
      <Footer />
    </PageWrapper>
  )
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const LayoutWrapper = styled.main`
  flex: 1; 
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 1200px;
`;

export default Layout;
