import styled from 'styled-components';
import { Content, HighRank, MyRank, RankWrapper } from '../../../pages/Rank'
import { Link } from 'react-router-dom';

const UnAuthorizedRank = () => {

  return (
    <RankWrapper>
    <h1 className="title">나의 랭킹</h1>
    <Content>
      <MyRank>
        <div className="rank-box">
          <div className="rank-zone">
            <h1>RANK</h1>
            <span>-</span>
          </div>
          <div className="line"></div>
          <div className="go-page">
            <Link to='/'>메인 화면으로 가기</Link>
          </div>
        </div>
        <div className="score-box">
          <h2>로그인 후 이용 가능합니다.</h2>
        </div>
      </MyRank>
      <UnAuthorizedContent>
        <h2>로그인 후 이용 가능합니다.</h2>
        <Link to='/users/login'>
            <h3>로그인 하러 가기</h3>
          </Link>
      </UnAuthorizedContent>
    </Content>
  </RankWrapper>
  )
}

export default UnAuthorizedRank;

const UnAuthorizedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 448px);
  border: 1px solid ${({ theme }) => theme.color.grey3};
  border-radius: 8px;

  h2 {
    font-size: ${({ theme }) => theme.heading.title3};
    font-weight: 600;
  }

  h3 {
    font-size: ${({ theme }) => theme.heading.title4};
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;