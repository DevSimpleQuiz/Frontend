import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link, useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const totalScore = location.state?.totalScore || 0;
  const totalQuestions = location.state?.totalQuestions || 0;
  const correctAnswers = location.state?.correctAnswers || 0;

  return (
    <QuizResultStyle>
      <div className="header"> 총 점수는 </div>
      <div className="score">🎉 {totalScore}점 🎉</div>
      <div className="details">
        <div>총 문제 수: {totalQuestions}</div>
        <div>맞춘 문제 수: {correctAnswers}</div>
      </div>
      <div className="buttons">
        <div className="btn">
          <Link to="/quiz">
            <Button size="long" schema="normal">
              다시하기 🔮
            </Button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/">
            <Button size="long" schema="normal">
              홈 화면으로 이동 🏠
            </Button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/rank">
            <Button size="long" schema="normal">
              랭킹 확인 - 과연 나의 랭킹은❓
            </Button>
          </Link>
        </div>
      </div>
    </QuizResultStyle>
  );
}

const QuizResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  .header {
    margin: 50px;
    font-size: ${({ theme }) => theme.heading.title3};
  }

  .score {
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.heading.title1};
    font-weight: bold;
  }

  .details {
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.heading.title4};
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn {
      margin: 10px;
    }
    Button {
      width: 300px;
      height: 50px;
    }
  }
`;

export default QuizResult;
