import styled from "styled-components";
import { Rank } from "../../../models/rank.model";
import { useRank } from "../../../hooks/useRank";
import { useAuthStore } from "../../../store/authStore";
import { Link } from "react-router-dom";
import RankTable from "./RankTable";

const NearRank = ({ id }: Rank) => {
  const { nearRank } = useRank();
  const { isLoggedIn } = useAuthStore();

  const data = nearRank?.nearRankers.map(ranker => ({
    rank: ranker.rank,
    id: ranker.id,
    score: `${ranker.score}점`,
    totalQuizCount: `${ranker.totalQuizCount}개`,
    totalSolvedQuizCount: `${ranker.totalSolvedQuizCount}개`,
  })) || [];

  return (
    <NearRankWrapper>
      {isLoggedIn ? (
        <RankTable
          data={data} 
          highlightId={id} 
        />
      ) : (
        <NearRankLogout>
          <div>로그인 후 이용 가능합니다.</div>
          <Link to="/users/login">로그인 하러 가기</Link>
        </NearRankLogout>
      )}
    </NearRankWrapper>
  );
};

const NearRankWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: 10px;
`;

const NearRankLogout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 242px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.text.text1};

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export default NearRank;
