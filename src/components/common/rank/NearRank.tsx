import styled from "styled-components";
import { Rank } from "../../../models/rank.model";
import { useRank } from "../../../hooks/useRank";
import { useAuthStore } from "../../../store/authStore";
import { Link } from "react-router-dom";

const NearRank = ({ id }: Rank) => {
  const { nearRank } = useRank();
  const { isLoggedIn } = useAuthStore();

  return (
    <NearRankWrapper>
      {isLoggedIn ? (
        <NearRankLogin>
          <table>
            <thead>
              <tr>
                <th>순위</th>
                <th>이름</th>
                <th>점수</th>
              </tr>
            </thead>
            <tbody>
              {nearRank?.nearRankers.map((data, idx) => (
                <tr key={idx} className={data.id === id ? "highlight" : ""}>
                  <td>{data.rank}</td>
                  <td>{data.id}</td>
                  <td>{data.score}점</td>
                </tr>
              ))}
            </tbody>
          </table>
        </NearRankLogin>
      ) : (
        <NearRankLogout>
          <div>로그인 후 이용 가능합니다.</div>
          <Link to="/login">로그인 하러 가기</Link>
        </NearRankLogout>
      )}
    </NearRankWrapper>
  );
};

const NearRankWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey2};
  border-radius: 8px;
  /* filter: blur(10px); */
`;

const NearRankLogin = styled.div`
  table {
    display: table;
    table-layout: fixed;
    overflow: hidden;
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    border-style: hidden;

    th,
    td {
      border: 1px solid ${({ theme }) => theme.color.grey4};
      text-align: center;
    }

    th {
      padding: 12px 0;
      background-color: ${({ theme }) => theme.color.primary};
      color: #fff;
      font-size: ${({ theme }) => theme.text.text1};
      font-weight: 600;
    }

    td {
      padding: 18px 0;
      font-size: ${({ theme }) => theme.text.text1};
    }

    .highlight {
      background-color: ${({ theme }) => theme.color.grey5};
      font-weight: 600;
    }
  }
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