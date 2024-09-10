import React, { useState } from "react";
import styled from "styled-components";
import { useUsers } from "../hooks/useUsers";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import Button from "../components/Button";
import { ReactComponent as Quiz } from "../assets/myPageImg/Vector.svg";
import { ReactComponent as Challenge } from "../assets/myPageImg/Vector-1.svg";
import { ReactComponent as Correct } from "../assets/myPageImg/Vector-2.svg";
import { ReactComponent as Score } from "../assets/myPageImg/Vector-3.svg";
import { useRank } from "../hooks/useRank";
import { Link } from "react-router-dom";

const MyPage = () => {
  const { users } = useUsers();
  const { userRank } = useRank();

  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/users/login");
  }
  return (
    <Container>
      <Top>
        <Pro>
          <h2>나의 정보</h2>
          <Profile>
            <IoPersonCircle size={200} />
            <ProfileText>
              <h2>{users?.id}</h2>
              <div className="buttons">
                {/* <Button size="short" schema="normal">
                프로필 수정
              </Button> */}
                <Link to="/reset-password">
                  <Button size="short" schema="normal">
                    비밀번호 재설정
                  </Button>
                </Link>
                <Button size="short" schema="normal">
                  회원 탈퇴
                </Button>
              </div>
            </ProfileText>
          </Profile>
        </Pro>
        <Rank>
          <h2>나의 랭킹</h2>
          <RankBox>
            <p>{users?.myRank}위</p>
            <Link to="/rank">
              <Button size="short" schema="normal">
                랭킹 확인하러 가기
              </Button>
            </Link>
          </RankBox>
        </Rank>
      </Top>
      <Bottom>
        <h2>나의 활동</h2>
        <BottomBoxes>
          <Box>
            <BoxText>
              <Quiz className="Quiz" />
              <p>Total Quiz</p>
            </BoxText>
            <h1>{userRank?.totalQuizCount} 문제</h1>
          </Box>
          <Box>
            <BoxText>
              <Challenge className="Challenge" />
              <p>Challenge</p>
            </BoxText>
            <h1>{userRank?.totalQuizCount} 회</h1>
          </Box>
          <Box>
            <BoxText>
              <Correct className="Correct" />
              <p>Correct Question</p>
            </BoxText>
            <h1>{userRank?.totalSolvedQuizCount} 문제</h1>
          </Box>
          <Box>
            <BoxText>
              <Score className="Score" />
              <p>Score</p>
            </BoxText>
            <h1>{userRank?.totalQuizScore} 점</h1>
          </Box>
        </BottomBoxes>
      </Bottom>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 60px;
  flex-direction: column;
  gap: 70px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 0 30px;
`;

const Pro = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 20px;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
  }
`;

const Profile = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.grey1};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 220px;
  gap: 5px;

  p {
    font-size: 30px;
    font-weight: bold;
  }
  Button {
    margin: 10px;
    font-size: 13px;
  }

  svg {
    color: ${({ theme }) => theme.color.grey1};
  }
`;

const ProfileText = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    Button {
      width: 130px;
      margin: 8px;
      font-size: 13px;
    }
  }
`;

const Rank = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 20px;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
  }
`;

const RankBox = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.grey1};
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;

  p {
    font-size: 30px;
    font-weight: bold;
  }
  Button {
    margin: 10px;
    font-size: 13px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }
`;

const BottomBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.color.grey1};
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 100px;
  }
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 10px;

  svg.Quiz,
  svg.Challenge,
  svg.Correct,
  svg.Score {
    position: absolute;
    z-index: 1;
    padding: 5px;
  }

  svg.Quiz {
    margin: 10px 80px 0 0;
  }

  svg.Challenge {
    margin: 10px 80px 0 0;
  }

  svg.Correct {
    margin: 10px 120px 0 0;
  }

  svg.Score {
    margin: 10px 40px 0 0;
  }

  p {
    position: absolute;
    z-index: 2;
    margin-top: 10px;
    color: #000000;
  }
`;
