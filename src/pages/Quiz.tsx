import React, { useState } from 'react';
import styled from 'styled-components';
import next from '../assets/images/next.png'
import hint from '../assets/images/hintH.png'
import { theme } from '../styles/theme';



function Quiz(){
  //점수 관련
  const [currentScore, setCurrentScore] = useState<number>(10);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [progressNum, setProgressNum] =useState<number>(0);

  //퀴즈 답 입력
  const [inputText, setInputText] = useState<string>("");
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }
  const [isCorrect, setIsCorrect] = useState<string>(theme.color.grey4);
  const [resultText, setResultText]= useState<string>("");

  //퀴즈 관련
  const [quizAnswer, setquizAnswer] = useState<string>("가로등");
  const [quizQuestion, setQuizQuestion] = useState<string>("어둠을 밝히기 위하여 길에 설치한 등.");

  const onClickNextBtn = () => {
    if(progressNum >= 100){
      return;
    }
    if(resultText === ""){
      alert("답 입력 후 엔터를 눌러주세요.");
      return;
    } 
    setProgressNum(state => state + 10);
  }

  const onSubmitAnswer = (event:React.KeyboardEvent<HTMLInputElement>) => {
    const value = inputText;
    if(event.key === 'Enter'){
        if(value === ""){
          alert("답 입력 후 엔터를 눌러주세요.");
        }
        else if (value === '가로등') { //문제의 정답이 들어갈 자리
          setIsCorrect(theme.color.green);
          setResultText("정답!");
          setTotalScore( state => state + currentScore);
        } else {
          setIsCorrect(theme.color.red);
          setResultText("오답!");
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
        <div className="quizButton"><img className="imgH" src={hint} alt="hint button"/></div>
          <QuizInput 
            readOnly = {false}
            onChange={onChangeInput}
            value={inputText} 
            isCorrect={isCorrect} 
            onKeyDown={onSubmitAnswer}
          />
          <div className="quizButton" onClick={onClickNextBtn}><img className="imgN" src={next} alt="next button"/></div>
        </div>
        
        <div className='resultBox'>
            {resultText}<br/>
            {(resultText === "오답!") && (<>답 : {quizAnswer}</>)}
            
        </div>
        
    </QuizWrapper>
  );
}

export default Quiz;

const QuizWrapper = styled.div`
  text-align: center;
  .quizButton {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${({theme}) => theme.color.grey3};
    cursor: pointer;
    img{
        position: absolute; 
        top: 50%; 
        left: 50%;   
        transform: translate(-50%, -50%);
    } 
  }
  .imgH{
        width: 20px;   
    }
  .imgN{
        width: 17px;   
    }
  .answerBox{
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    align-items : center;
    gap: 1rem;
  }
  .progressBar {
    height: 16px;
    background-color: ${({theme}) => theme.color.grey3};
    border-radius: 10px;
    margin: 100px 0px 50px;
  }
  .questionBox{
    display : flex;
    width: 70%;
    height: 300px;
    margin-bottom: 1rem;
    margin: auto;
    padding: 2rem;
    border: 8px solid ${({theme}) => theme.color.grey2};
    border-radius: 5px;
    font-size: ${({theme}) => theme.heading.title2};
    line-height: 46px;
    justify-content : center;
    align-items : center;
  }
  .scores{
    display: flex;
    margin-bottom: 1rem;
    font-size: ${({theme}) => theme.heading.title4};
    line-height: 28px;
    justify-content: center;
    flex-direction: column;
  }
  .resultBox{
    margin-top: 1rem;
    font-size: ${({theme}) => theme.heading.title2};
    justify-content: center;
  }
`;


const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  border-radius: 5px;
  background-color: #2196F3;
`;

const QuizInput = styled.input<{ isCorrect :string , value: string }>`
  width: 300px;
  margin:45px;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  background: ${props => props.isCorrect};
  cursor: pointer;
  color: ${props => props.isCorrect === theme.color.grey4  ? 'black' : 'white'};
`;

