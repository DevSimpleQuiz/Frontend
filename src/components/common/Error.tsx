import { useRouteError } from "react-router-dom";
import { ReactComponent as DevSimpleQuiz } from "../../assets/logo/DevSimpleQuizLogo.svg";
import styled, { keyframes } from "styled-components";

interface RouteError {
  statusText?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as RouteError;

  if (!error || error.statusText === "Not Found") {   //없는 페이지일 경우 (경로 오류)
    // 경로 오류일 경우
    return (
      <ErrorStyle>
        <RotatingDevSimpleQuiz />
        <div className="text">🚨 페이지 공사중 ... 🚨</div>
      </ErrorStyle>
    );
  }

  let errorMessage = "알 수 없는 오류가 발생했습니다. ";  
  if (error.statusText) {
    switch (error.statusText) {            //기타 오류 케이스 추가 예정
      case "500":
        errorMessage = "서버 오류가 발생했습니다.";
        break;
      default:
        errorMessage = `오류 발생: ${error.statusText}`;
        break;
    }
  }

  return (
    <ErrorStyle>
      <RotatingDevSimpleQuiz />
      <div className="text">🚨 기능 공사중 ... 🚨</div>
      <p> {errorMessage} </p>
    </ErrorStyle>
  );
}

const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  .text {
    margin: 30px;
    font-size: ${({ theme }) => theme.heading.title4};
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingDevSimpleQuiz = styled(DevSimpleQuiz)`
  width: 30%;
  height: 30%;
  animation: ${rotate360} 4s linear infinite;
`;

export default Error;
