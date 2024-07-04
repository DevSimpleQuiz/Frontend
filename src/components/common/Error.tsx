import React from "react";
import { useRouteError } from "react-router-dom";
import { ReactComponent as DevSimpleQuiz } from "../../assets/logo/DevSimpleQuizLogo.svg";
import styled, { keyframes } from "styled-components";

interface RouteError {
  statusText?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as RouteError;

  const isNotFoundError = !error || error.statusText === "Not Found";

  let errorMessage = "알 수 없는 오류가 발생했습니다.";
  if (error?.statusText) {
    const statusText = error.statusText;
    switch (statusText) {
      case "400":
        errorMessage = "잘못된 요청입니다.";
        break;
      case "401":
        errorMessage = "인증되지 않은 사용자입니다.";
        break;
      case "500":
        errorMessage = "서버 오류가 발생했습니다.";
        break;
      default:
        errorMessage = `오류 발생: ${statusText}`;
        break;
    }
  }

  return (
    <ErrorStyle>
      <RotatingDevSimpleQuiz />
      <div className="text">
        {isNotFoundError ? "🚨 페이지 공사중 ... 🚨" : "🚨 기능 공사중 ... 🚨"}
      </div>
      {!isNotFoundError && <p>{errorMessage}</p>}
    </ErrorStyle>
  );
}

const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;

  .text {
    margin: 30px;
    font-size: ${({ theme }) => theme.heading.title4 || "24px"};
  }

  p {
    font-size: ${({ theme }) => theme.heading.title5 || "20px"};
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
