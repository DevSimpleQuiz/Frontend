import React, { useState } from 'react';
import styled from 'styled-components';
import next from '../assets/images/next.png'
import { theme } from '../styles/theme';
const QuizWrapper = styled.div`
  text-align: center;
  .nextButton {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: ${({theme}) => theme.color.grey3};
    border-radius: 50px;
    img{
        position: absolute; 
        left: 50%; 
        top: 50%; 
        transform: translate(-50%, -50%);
        width: 17px;
        
    }
  }
  .answerBox{
    display: flex;
    justify-content: center;
    align-items : center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .progressBar {
    height: 16px;
    background-color: ${({theme}) => theme.color.grey3};
    border-radius: 10px;
    margin: 100px 178px 50px;
  }
  .questionBox{
    border: 8px solid ${({theme}) => theme.color.grey2};
    border-radius: 5px;
    width: 60%;
    height: 200px;
    padding: 2rem;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-bottom: 1rem;
    font-size: ${({theme}) => theme.heading.title2};
    line-height: 46px;
    margin: auto;
  }
  .scores{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: ${({theme}) => theme.heading.title4};
    line-height: 28px;
  }
  .resultBox{
    margin-top: 1rem;
    font-size: ${({theme}) => theme.heading.title2};
  }
`;


const Progress = styled.div<{ width: number }>`
  height: 100%;
  background-color: #2196F3;
  border-radius: 5px;
  width: ${props => props.width}%;
`;

const QuizInput = styled.input<{ isCorrect: string }>`
  background: ${props => props.isCorrect};
  border: 0;
  border-radius: 5px;
  margin:45px;
  padding: 1rem;
  width: 300px; 
  cursor: pointer;
  color: ${props => props.isCorrect === theme.color.grey4  ? 'black' : 'white'};
`;




function Quiz(){
  //점수 관련
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [progressNum, setProgressNum] =useState<number>(30);

  //퀴즈 답 입력
  const [inputText, setInputText] = useState<string>("");
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }
  const [isCorrect, setIsCorrect] = useState<string>(theme.color.grey4);

  //퀴즈 관련
  const [quizAnswer, setquizAnswer] = useState<string>("가로등");
  const [quizQuestion, setQuizQuestion] = useState<string>("어둠을 밝히기 위하여 길에 설치한 등.");



  const onSubmitAnswer = (event:React.KeyboardEvent<HTMLInputElement>) => {
    const value = inputText;
    if(event.key === 'Enter'){
        if (value === '가로등') { //문제의 정답이 들어갈 자리
            setIsCorrect(theme.color.green);
          } else {
            setIsCorrect(theme.color.red);
          }
    }
  };

  return (
    <QuizWrapper>
        <div className='progressBar'>
          <Progress width={progressNum} /> 
        </div>
        <div className='scores'>
          <span>현재 문제 점수: {currentScore}점</span>
          <span>총 점수: {totalScore}점</span>
        </div>
        <div className='questionBox'>
          {quizQuestion}
        </div>
        <div className='answerBox'>
          <QuizInput 
            onChange={onChangeInput}
            value={inputText} 
            isCorrect={isCorrect} 
            onKeyDown={onSubmitAnswer}
          />
          <div className="nextButton"><img src={next} alt="next button"/></div>
        </div>
        
        { (isCorrect === "#F44336" ) && (
          <div className='resultBox'>
            오답!<br/>
            답 : {quizAnswer}
          </div>
        )}
    </QuizWrapper>
  );
}

export default Quiz;