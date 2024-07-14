import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { result } from "../api/quiz.api";
import { QuizResult } from "../models/quiz.model";

export const useSaveQuizResult = (
  totalQuestions: number,
  totalScore: number
) => {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const saveResult = async () => {
      if (isLoggedIn) {
        console.log(`${totalScore} 점 저장 완료`);
        const quizResult: QuizResult = {
          totalQuizCount: totalQuestions,
          solvedQuizCount: totalScore / 10,
          totalQuizScore: totalScore,
        };
        try {
          await result(quizResult);
        } catch (error) {
          console.error("퀴즈 결과 저장 중 오류 발생", error);
        }
      } else {
        console.log("로그인하지 않으면 퀴즈 결과가 저장되지 않습니다.");
      }
    };
    saveResult();
  }, [isLoggedIn, totalQuestions, totalScore]);
};
