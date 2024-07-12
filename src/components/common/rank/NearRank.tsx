import styled from 'styled-components';
import { Rank } from '../../../models/rank.model';

interface NearRankProps {
  myRank: Rank;
  nearRank: Rank[];
}

const NearRank = ({ myRank, nearRank }: NearRankProps) => {
  const startIndex = nearRank.findIndex(data => data.id === myRank.id);
  const nearRankData = nearRank.slice(startIndex - 1, startIndex + 2);

  return (
    <NearRankWrapper>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {nearRankData.map((data, idx) => (
            <tr key={idx} className={data.id === myRank.id ? "highlight" : ''}>
              <td>{data.rank}</td>
              <td>{data.id}</td>
              <td>{data.score}점</td>
            </tr>
          ))}
        </tbody>
      </table>
    </NearRankWrapper>
  )
};

const NearRankWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: 8px;

  table {
    display: table;
    table-layout: fixed;
    overflow: hidden;
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    border-style: hidden;

    th, td {
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

export default NearRank;