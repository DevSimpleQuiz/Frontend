import styled from "styled-components";

interface RankTableProps {
  data: Array<{ [key: string]: string | number }>;
  highlightId?: string;
}

const RankTable = ({ data, highlightId } : RankTableProps) => {
  return (
    <RankTableWrapper>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={row.id === highlightId ? "highlight" : ""}>
              <td>{row.rank}</td>
              <td>{row.id}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RankTableWrapper>
  );
};

const RankTableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: 10px;

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

export default RankTable;
