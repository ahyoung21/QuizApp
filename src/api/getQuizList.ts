import { API_URL } from '@constants/api';
import { HTTP, ResponseMetaSchema } from './http';

export interface QuizSchema {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuizListResponse {
  results: QuizSchema[];
  response_code: Number;
}

const getQuizList = async () => {
  const res = await HTTP.get<QuizListResponse>(API_URL.GET_QUIZ_LIST);

  return res.data;
};

export default getQuizList;
