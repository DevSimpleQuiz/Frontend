import styled from 'styled-components';
import { Content, MyRank, RankBox, RankWrapper, ScoreBox, Title } from '../../../pages/Rank'
import { Link } from 'react-router-dom';

const UnAuthorizedRank = () => {

  return (
    <RankWrapper>
      <section>
        <Title>나의 랭킹</Title>
        <Content>
          <MyRank>
          <RankBox className="rank-box">
            <div className="rank-zone">
              <h1>RANK</h1>
              <span>-</span>
            </div>
            <div className="line"></div>
            <div className="go-page">
              <Link to='/'>메인 화면으로 가기</Link>
            </div>
          </RankBox>
          <ScoreBox className="score-box">
            <h3>로그인 후 이용 가능합니다.</h3>
          </ScoreBox>
        </MyRank>
      </Content>
      </section>
      <section>
        <Title>전체 랭킹</Title>
        <Content>
          <UnAuthorizedContent>
            <h2>로그인 후 이용 가능합니다.</h2>
            <Link to='/users/login'>
                <h3>로그인 하러 가기</h3>
              </Link>
          </UnAuthorizedContent>
        </Content>
      </section>
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