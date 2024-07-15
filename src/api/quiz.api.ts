import { QuizItem, QuizResult } from "../models/quiz.model";
import { httpClient } from "./http";

interface FetchQuizzesResponse {
  quizzes: QuizItem[];
}

export const fetchQuizzes = async () => {

  try{
    const response = await httpClient.get<FetchQuizzesResponse>("/quiz");
    return response.data;
  }catch (error) {
    return {
      quizzes: [],
    };
  }   
};

// 퀴즈 결과 저장
export const result = async (data: QuizResult) => {
  try {
    await httpClient.post("/quiz/result", data);
  } catch (error) {
    console.error("결과 저장에 실패하였습니다.", error);
  }
};

