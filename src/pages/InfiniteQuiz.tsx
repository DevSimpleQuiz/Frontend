import styled from "styled-components";
import {ReactComponent as DevSimpleQuiz} from '../assets/logo/DevSimpleQuizLogo.svg';


function InfiniteQuiz() {
  return (
    <InfiniteQuizStyle>
      <DevSimpleQuiz />
      <div className="text">페이지 공사중 ... </div>
    </InfiniteQuizStyle>
  );
}
const InfiniteQuizStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  .text{
    margin: 30px;
    font-size: ${({theme})=>theme.heading.title4};
  }
`;

export default InfiniteQuiz;
