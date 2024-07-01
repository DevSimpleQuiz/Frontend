import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as QuizIcon } from "../assets/btnImg/quiz 1.svg";
import { ReactComponent as InfiniteIcon } from "../assets/btnImg/infinite 1.svg";
import { ReactComponent as RankIcon } from "../assets/btnImg/ranking 1.svg";
import Banner from "../components/common/banner/Banner";
function Home() {
  return (
    <HomeStyle>
      <div className="banner">
        <Banner />
      </div>
      <section className="btnSection">
        <p className="title">Simple Quiz 풀러가기</p>
        <div className="card">
          <div className="iconCard">
            <Link to="/quiz">
              <div className="quizIcon">
                <QuizIcon />
              </div>
              <p className="cardTitle">퀴즈 풀러 가기 🌈</p>
              <p className="cardDescription">#단어 #10문제 #초성힌트</p>
            </Link>
          </div>
          <div className="iconCard">
            <Link to="/infiniteQuiz">
              <div className="infiniteIcon">
                <InfiniteIcon />
              </div>
              <p className="cardTitle">무한 퀴즈 챌린지 🔥</p>
              <p className="cardDescription">#단어 #점수도전 #초성힌트</p>
            </Link>
          </div>
          <div className="iconCard">
            <Link to="/ranking">
              <div className="rankingIcon">
                <RankIcon />
              </div>
              <p className="cardTitle">랭킹 확인 🥇</p>
              <p className="cardDescription">#1위부터 #5위까지</p>
            </Link>
          </div>
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
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    position: relative;
  }

  .title {
    /* color: ${({ theme }) => theme.color.text}; */
    font-size: ${({ theme }) => theme.heading.title4.fontSize};
    font-weight: 650;
    margin: 20px 0;
  }

  .btnSection {
    /* margin: 10px 50px; */
  }

  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* justify-content: center;
    gap: 100px; */
    margin-bottom: 120px;
  }

  .iconCard {
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 240px;
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .quizIcon, .infiniteIcon, .rankingIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    svg {
      width: 120px;
      /* height: 100px; */
    }
  }
  .quizIcon {
    background-color: ${({ theme }) => theme.color.green};
  }
  .infiniteIcon {
    background-color: ${({ theme }) => theme.color.yellow};
  }
  .rankingIcon {
    background-color: ${({ theme }) => theme.color.blue};
  }

  .cardTitle {
    align-self: flex-start;
    text-align: left;
    margin-left: 20px;
    /* font-size: ${({ theme }) => theme.heading.title4.fontSize}; */
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .cardDescription {
    align-self: flex-start;
    text-align: left;
    margin-left: 20px;
    font-size: 13px;
  }
`;
export default Home;
