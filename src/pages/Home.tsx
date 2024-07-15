import React from "react";
import styled from "styled-components";
import { ReactComponent as QuizIcon } from "../assets/btnImg/quiz 1.svg";
import { ReactComponent as InfiniteIcon } from "../assets/btnImg/infinite 1.svg";
import { ReactComponent as RankIcon } from "../assets/btnImg/ranking 1.svg";
import Banner from "../components/common/banner/Banner";
import IconCard from "../components/common/IconCard";

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <div className="banner">
        <Banner />
      </div>
      <section className="btnSection">
        <p className="title">Simple Quiz 풀러가기</p>
        <div className="card">
          <IconCard
            to="/quiz"
            bgColor="green"
            Icon={QuizIcon}
            title="퀴즈 풀러 가기 🌈"
            description="#단어 #10문제 #초성힌트"
          />
          {/* <IconCard
            to="/infinite-quiz"
            bgColor="yellow"
            Icon={InfiniteIcon}
            title="무한 퀴즈 챌린지 🔥"
            description="#단어 #점수도전 #초성힌트"
          /> */}
          <IconCard
            to="/rank"
            bgColor="blue"
            Icon={RankIcon}
            title="랭킹 확인 🥇"
            description="#1위부터 #5위까지"
          />
        </div>
      </section>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    color: black;
  }

  .banner {
    position: relative;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    height: 80%;
  }

  .title {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.heading.title4};
    font-weight: bold;
  }

  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 60px;
    padding: 0 60px;

    @media (max-width: 1024px) {
      gap: 60px; 
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr); 
      gap: 40px; 
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
  }
`;

export default Home;
