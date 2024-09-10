import styled from 'styled-components';

interface RankErrorProps {
  message: string;
}

const RankError = ({ message }: RankErrorProps) => {
  return (
    <RankErrorWrapper>
      <h2>{ message }</h2>
    </RankErrorWrapper>
  )
};

const RankErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 416px;
  border: 1px solid ${({ theme }) => theme.color.grey3};
  border-radius: 8px;

  h2 {
    font-size: ${({ theme }) => theme.heading.title3};
    font-weight: 600;
  }

`;

export default RankError;