import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile.png'
import { useUsers } from '../hooks/useUsers';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  .profileImg{
    width:190px;
    }
  .profile-left, .profile-right {
    flex: 1;
    padding: 10px;
   }
  .profile-right{
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    padding: 5% 80px;
    border-left: 1px solid ${({theme}) => theme.color.grey3};;
    }

.profile-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #edf2f7;
  border-radius: 50%;
  margin-bottom: 20px;
}

.pic-placeholder {
  width: 80%;
  height: 80%;
  background-color: #cbd5e0;
  border-radius: 50%;
}

.profile-info .info-item {
  margin-bottom: 10px;
  font-size: 18px;
}

.quiz-info, .personal-info {
  margin-bottom: 100px;
}

.quiz-title{
  font-size: ${({theme}) => theme.heading.title3};
  margin-bottom: 20px;
  font-weight: bold;
}
.personal-title {
  font-weight: bold;
  font-size: ${({theme}) => theme.heading.title3};
  margin-bottom: 20px;
}

.quiz-details {
  font-size: ${({theme}) => theme.text.text1};
  color: #4a5568;
}


`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 80px 0;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 16px;
`;

const Avatar = styled.div`
  width: 250px;
  height: 250px;
  padding:28px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.grey2};
  background-size: cover;
  background-position: center;
`;

const Info = styled.div`
  margin-top: 25px;
  padding-left: 50px;
  font-size: ${({theme}) => theme.text.text1};
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 8px;
    span {
      flex: 1;
      text-align: left;
    }
      span:nth-child(2) {
      flex: 0 0 auto; /* Ensure | takes its intrinsic width */
      width: auto;
      margin-right:30px; /* Space around the | character */
    }
  }


`;

const Link = styled.a`
  color: ${({theme}) => theme.color.primary};;
  cursor: pointer;
  margin-top: 8px;
  font-size: ${({theme}) => theme.text.text1};
  text-decoration: underline;
`;




const MyPage = () => {
    const {users} = useUsers();
    const { isLoggedIn } = useAuthStore();
    const navigate = useNavigate();
    
    if(!isLoggedIn){
      console.log(isLoggedIn);
      navigate("/users/login");
    }
  return (
    <Container>
      <Content>
        <Profile>
          <Avatar><img className="profileImg" src={profile} alt="profle"/></Avatar>
          <Info>
            <div>
              <span>ID</span>
              <span>|</span>
              <span> {users?.id}</span>
            </div>
            <div>
              <span>RANK</span>
              <span>|</span>
              <span>{users?.myRank}</span>
            </div>
          </Info>
        </Profile>
        <div className="profile-right">
          <div className="quiz-info">
            <div className="quiz-title">퀴즈에 관심이 있는 당신...</div>
            <div className="quiz-details">지금까지 푼 문제 수 : {(users?.solvedCount) ? users?.solvedCount : 0}개</div>
          </div>
          <div className="personal-info">
            <div className="personal-title">개인정보 보호</div>
            <Link>비밀번호 재설정</Link>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default MyPage;