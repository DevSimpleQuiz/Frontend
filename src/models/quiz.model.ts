export interface QuizItem{
    word: string;
    definition: string;
    initialConstant: string;
    wordLength: number;
}

export interface QuizResult {
    totalQuizCount: number;
    solvedQuizCount: number;
    totalQuizScore: number;
  }
  