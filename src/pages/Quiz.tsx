import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import next from '../assets/quizImg/next.png';
import hintD from '../assets/quizImg/hintD.png';
import hintH from '../assets/quizImg/hintH.png'; 
import { theme } from '../styles/theme';
import { useQuizzes } from '../hooks/useQuizzes';
import HintModal from '../components/quiz/HintModal';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [currentScore, setCurrentScore] = useState<number>(10);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [progressNum, setProgressNum] = useState<number>(0);
  const { quizzes } = useQuizzes();
  const [hintVisible, setHintVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentQuiz = quizzes[currentIndex];

  const [inputText, setInputText] = useState<string>("");
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const [isCorrect, setIsCorrect] = useState<string>(theme.color.grey4);
  const [resultText, setResultText] = useState<string>("");


   // 새로고침 및 뒤로가기 시 메인 화면으로 이동
   useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    const handleUnload = () => {
      if (sessionStorage.getItem('confirmed') !== 'true') {
        sessionStorage.setItem('refreshed', 'true');
        navigate('/');
      }
    };

    const handlePopState = () => {
      if (window.confirm('퀴즈가 종료됩니다. 계속하시겠습니까?')) {
        navigate('/');
      } else {
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);
    window.addEventListener('popstate', handlePopState);

    if (sessionStorage.getItem('refreshed') === 'true') {
      sessionStorage.removeItem('refreshed');
      sessionStorage.removeItem('confirmed');
      navigate('/');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);


  const onClickNextBtn = () => {
    if (progressNum >= 100) {
      return;
    }
    if (resultText === "") {
      alert("답 입력 후 엔터를 눌러주세요.");
      return;
    }
    setProgressNum((state) => state + 10);
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInputText("");
      setIsCorrect(theme.color.grey4);
      setResultText("");
    } else {
      // 모든 퀴즈 완료
    }
  };

  const onMouseEnterHint = () => {
    setHintVisible(true);
  };

  const onMouseLeaveHint = () => {
    setHintVisible(false);
  };

  const renderQuizDefinition = (definition: string) => {
    const sentences = definition.split('.,');
    let charCount = 0;
    return sentences.map((sentence, index) => {
      charCount += sentence.length;
      if (index === 0 || charCount <= 40) {
        return <p key={index}>{sentence}</p>;
      }
      return null;
    });
  };

  if (!quizzes || quizzes.length === 0) {
    //로딩 화면 추가..?
    return <p>퀴즈를 불러오는 중...</p>;
  }
  const onSubmitAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = inputText;
    if (event.key === 'Enter'&& resultText === "") {
      if (value === "") {
        alert("답 입력 후 엔터를 눌러주세요.");
      } else if (value === currentQuiz.word) {
        setIsCorrect(theme.color.green);
        setResultText("정답!");
        setTotalScore((state) => state + currentScore);
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
        {renderQuizDefinition(currentQuiz.definition)}
      </div>
      <div className='answerBox'>
        <HintWrapper onMouseEnter={onMouseEnterHint} onMouseLeave={onMouseLeaveHint}>
          <div className="quizButton">
            <img className="imgH" src={hintVisible ? hintH : hintD} alt="hint button" />
            <HintModal
              initialConstant={currentQuiz.initialConstant}
              visible={hintVisible}
            />
          </div>
        </HintWrapper>
        <QuizInput
          readOnly={resultText === "정답!" || resultText === "오답!"}
          onChange={onChangeInput}
          value={inputText}
          isCorrect={isCorrect}
          onKeyDown={onSubmitAnswer}
        />
        <div className="quizButton" onClick={onClickNextBtn}><img className="imgN" src={next} alt="next button" /></div>
      </div>
      <div className='resultBox'>
        {resultText}<br />
        {(resultText === "오답!") && (<>답 : {currentQuiz.word}</>)}
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
    background-color: ${({ theme }) => theme.color.grey3};
    cursor: pointer;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .imgH {
    width: 20px;
  }
  .imgN {
    width: 17px;
  }
  .answerBox {
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .progressBar {
    height: 16px;
    background-color: ${({ theme }) => theme.color.grey3};
    border-radius: 10px;
    margin: 100px 0px 50px;
  }
  .questionBox {
    display: flex;
    width: 75%;
    height: 350px;
    margin-bottom: 1rem;
    margin: auto;
    padding:30px;
    border: 8px solid ${({ theme }) => theme.color.grey2};
    border-radius: 5px;
    font-size: ${({ theme }) => theme.heading.title2};
    line-height: 46px;
    justify-content: center;
   
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
  }
  .scores {
    display: flex;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.heading.title4};
    line-height: 28px;
    justify-content: center;
    flex-direction: column;
  }
  .resultBox {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.heading.title2};
    justify-content: center;
  }
`;

const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  border-radius: 5px;
  background-color: #2196F3;
`;

const QuizInput = styled.input<{ isCorrect: string, value: string }>`
  width: 300px;
  margin: 45px;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  background: ${props => props.isCorrect};
  cursor: pointer;
  color: ${props => props.isCorrect === theme.color.grey4 ? 'black' : 'white'};
  text-align: center;
  outline: none;
`;

const HintWrapper = styled.div`
  position: relative;
`;