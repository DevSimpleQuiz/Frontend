import { QuizItem } from "../models/quiz.model";
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