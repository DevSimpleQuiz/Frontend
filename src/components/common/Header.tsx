import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Content>
        <div className='logo'>
          <h1>Quiz</h1>
        </div>
        <div className="auth">
          <button>JOIN</button>
          <button>LOGIN</button>
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

    button {
      padding: 6px 12px;
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.grey4};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all linear 0.15s;

      &:hover {
        background-color: ${({ theme }) => theme.color.grey2};
        transition: all linear 0.15s;
      }
    }
  }
`;

export default Header;