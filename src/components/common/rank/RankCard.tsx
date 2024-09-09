import styled from 'styled-components';
import { FaUser } from "react-icons/fa";
import { Rank, Ranker } from '../../../models/rank.model';

const RankCard = ({ id, rank, score }: Ranker) => {
  return (
    <RankCardWrapper rank={rank}>
      <h1 className="rank">{rank}</h1>
      <div className="user">
        <div className="profile"><FaUser /></div>
        <div className="id">{id}</div>
        <div className="score">{score}점</div>
      </div>
    </RankCardWrapper>
  )
};

const RankCardWrapper = styled.div<{ rank: number | undefined }>`
  padding: 16px 28px;
  padding-bottom: 40px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.grey2};
  /* border: 1px solid ${({ rank, theme }) => 
    rank === 1 ? theme.color.yellow :
    rank === 2 ? theme.color.green :
    rank === 3 ? theme.color.blue :
    theme.color.primary
  }; */
  border-radius: 8px;
  
  .rank {
    font-size: ${({ theme }) => theme.heading.title1};
    font-weight: 800;
    color: ${({ rank, theme }) => 
      rank === 1 ? theme.color.yellow :
      rank === 2 ? theme.color.green :
      rank === 3 ? theme.color.blue :
      theme.color.primary
    };
  }

  .user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .profile {
      width: 200px;
      height: 200px;
      border: 8px solid ${({ rank, theme }) => 
        rank === 1 ? theme.color.yellow :
        rank === 2 ? theme.color.green :
        rank === 3 ? theme.color.blue :
        theme.color.primary
      };
      border-radius: 50%;
      line-height: 200px;
      text-align: center;

      svg {
        width: 50%;
        height: 100%;
        fill: ${({ theme }) => theme.color.grey1};
      }
    }

    .id {
      font-size: ${({ theme }) => theme.text.text1};
      font-weight: 600;
    }
    
    .score {
      font-size: ${({ theme }) => theme.heading.title3};
      font-weight: 600;
    }
  }
`;

export default RankCard;