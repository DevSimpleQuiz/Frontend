import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <Content>
        <div className='logo'>
          <Link to='/'>
            <h1>Quiz</h1>
          </Link>
        </div>
        <div className="auth">
          <Link to='/join'>
            <Button
              size='short'
              schema='normal'
            >JOIN</Button>
          </Link>
          <Link to='/login'>
            <Button
              size='short'
              schema='normal'
            >LOGIN</Button>
          </Link>
        </div>
      </Content>
    </HeaderWrapper>
  )
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.color.primary};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 1200px;
  height: 100%;

  .logo {
    h1 {
      margin: 0;
      padding: 0;
      color: white;
      font-size: ${({ theme }) => theme.heading.title3};
    }
  }

  .auth {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`;

export default Header;