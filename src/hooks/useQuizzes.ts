import { useEffect, useState } from "react";
import { QuizItem } from "../models/quiz.model";
import { fetchQuizzes } from "../api/quiz.api";
import { httpClient } from "../api/http";


export const useQuizzes = () => {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
    useEffect(()=>{
      fetchQuizzes().then(
        (quiz) =>{
          //console.log(typeof quiz);     
          //console.log(Object.values(quiz)[0]);
          if(!quiz) return;
            setQuizzes(quiz?.quizzes);
          }
      );
    },[]);
  return {quizzes};
};