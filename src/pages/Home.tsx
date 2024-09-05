import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as QuizIcon } from "../assets/btnImg/quiz 1.svg";
import { ReactComponent as InfiniteIcon } from "../assets/btnImg/infinite 1.svg";
import { ReactComponent as RankIcon } from "../assets/btnImg/ranking 1.svg";
import Banner from "../components/common/banner/Banner";
import IconCard from "../components/common/IconCard";

const messages = [
  "Welcome to the Simple Quiz! 🎉",
  "다양한 어휘 퀴즈에 도전해보세요!",
  "로그인 하고 문제를 풀면 랭킹에 오를 수 있어요 ✨",
  "퀴즈 풀러 가볼까요?"
];

const Home: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showLastMessage, setShowLastMessage] = useState(false);

  useEffect(() => {
    if (showLastMessage) return;

    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex === messages.length - 2) {
          setShowLastMessage(true);
          return prevIndex + 1;
        }
        return (prevIndex + 1) % messages.length;
      });
    }, 3000); // 메시지가 3초마다 변경됩니다

    return () => clearInterval(timer);
  }, [showLastMessage]);

  return (
    <HomeStyle>
      <div className="banner">
        <Banner />
      </div>
      {!showLastMessage && (
        <WelcomeMessage key={currentMessageIndex} lastMessage={false}>
          {messages[currentMessageIndex]}
        </WelcomeMessage>
      )}
      {showLastMessage && (
        <WelcomeMessage key="lastMessage" lastMessage={true}>
          {messages[messages.length - 1]}
        </WelcomeMessage>
      )}
      <StyledSection className="btnSection">
        <div className="card">
          <IconCard
            to="/quiz"
            bgColor="green"
            Icon={QuizIcon}
            title="퀴즈 풀러 가기 🌈"
            description="#단어 #10문제 #초성힌트"
          />
          <IconCard
            to="/infinite-quiz"
            bgColor="yellow"
            Icon={InfiniteIcon}
            title="무한 퀴즈 챌린지 🔥"
            description="#단어 #점수도전 #초성힌트"
          />
          <IconCard
            to="/rank"
            bgColor="blue"
            Icon={RankIcon}
            title="전체 랭킹 확인 🥇"
            description="#전체 #나의랭킹 #점수확인"
          />
        </div>
      </StyledSection>
    </HomeStyle>
  );
};

const fadeInOut = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const WelcomeMessage = styled.div<{ lastMessage: boolean }>`
  font-size: ${({ theme }) => theme.heading.title3};
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.primary};
  animation: ${({ lastMessage }) =>
    lastMessage
      ? css`
          ${fadeIn} 2s ease-in-out
        `
      : css`
          ${fadeInOut} 3s ease-in-out
        `};
`;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p{
    color: ${({ theme }) => theme.color.primary};

  }

  .banner {
    position: relative;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    height: 80%;
  }

  .card {
    display: flex;
    justify-content: center;
    gap: 40px;
    /* padding: 10px 0; */
    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    @media (max-width: 480px) {
      gap: 10px;
    }
  }
`;

const StyledSection = styled.section`
  padding: 20px 20px;
  background: ${({ theme }) => theme.color.background};

  .title {
    font-size: ${({ theme }) => theme.heading.title2};
  }
`;

export default Home;
