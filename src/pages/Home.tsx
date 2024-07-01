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
    position: relative;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
  }

  .title {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.heading.title4};
    font-weight: 650;
  }

  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 120px;
  }

  .iconCard {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 240px;
    height: 250px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .quizIcon, .infiniteIcon, .rankingIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    svg {
      width: 120px;
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
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: left;
    font-size: ${({ theme }) => theme.text.text2};
    font-weight: bold;
   }

  .cardDescription {
    align-self: flex-start;
    margin-left: 20px;
    text-align: left;
    font-size: ${({ theme }) => theme.text.text3};
  }
`;
export default Home;
