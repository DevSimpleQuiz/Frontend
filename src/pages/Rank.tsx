import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRank } from '../hooks/useRank';
import UnAuthorizedRank from '../components/common/rank/UnAuthorizedRank';
import { allRankersDummy } from '../constants/allRankersDummy';
import RankTable from '../components/common/rank/RankTable';

const Rank = () => {
  const { userRank } = useRank();

  const data = allRankersDummy?.allRankers.map(ranker => ({
    rank: ranker.rank,
    id: ranker.id,
    score: `${ranker.score}점`,
  })) || [];

  if (!userRank) {
    return <UnAuthorizedRank />;
  }

  return (
    <RankWrapper>
      <section>
        <Title>나의 랭킹</Title>
        <Content>
          <MyRank>
            <RankBox className="rank-box">
              <div className="rank-zone">
                <h1>RANK</h1>
                <span>{userRank.rank}</span>
              </div>
              <div className="line"></div>
              <div className="go-page">
                <h2>잘 하고 있어요!</h2>
                <Link to='/'>메인 화면으로 가기</Link>
                <Link to='/mypage'>마이 페이지로 가기</Link>
              </div>
            </RankBox>
            <ScoreBox className="score-box">
              <h2>
                나의 점수는&nbsp;
                <span className="blue">{userRank.totalQuizScore}</span>점
              </h2>
              <h3>
                <span className="blue">{userRank.totalQuizCount}</span>문제 중&nbsp;
                <span className="blue">{userRank.totalSolvedQuizCount}</span>문제를 맞췄네요!
              </h3>
            </ScoreBox>
          </MyRank>
        </Content>
      </section>
      <section>
        <Title>전체 랭킹</Title>
        <Content>
          <RankTable
            data={data}
            highlightId={userRank.id}
          />
        </Content>
      </section>
    </RankWrapper>
  );
};

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 40px 0 80px 0;
  color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.title2};
  font-weight: 600;
  margin-bottom: 8px;
  padding: 4px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MyRank = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  width: 100%;
  height: 200px;

  .rank-box,
  .score-box {
    flex: 1;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.color.grey3};
    border-radius: 8px;
  }
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;

  .rank-zone {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    h1 {
      font-size: ${({ theme }) => theme.heading.title2};
      font-weight: 800;
    }

    span {
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.grey5};
      font-size: ${({ theme }) => theme.heading.title1};
      font-weight: 800;
      line-height: 100px;
      text-align: center;
    }
  }

  .line {
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.grey3};
  }

  .go-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    h2 {
      margin-bottom: 4px;
      font-size: ${({ theme }) => theme.heading.title3};
      font-weight: 600;
    }

    a {
      padding: 2px 8px;
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.grey5};
      border-radius: 8px;
      transition: all linear 0.1s;

      &:hover {
        background-color: ${({ theme }) => theme.color.grey4};
        transition: all linear 0.1s;
      }
    }
  }
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

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

  .blue {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const HighRank = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6%;
`;

export default Rank;
