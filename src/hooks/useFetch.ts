import { useEffect, useState } from 'react';
import { API_URL } from '@constants/api';
import { HTTP, ResponseMetaSchema } from '../../src/api/http';

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

const useFetch = (baseUrl: string, url: string) => {
  const [data, setData] = useState(null);

  const fetchUrl = (url: string) => {
    fetch(baseUrl + '/' + url)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(url);
  }, []);

  return { data, fetchUrl };
};

export default useFetch;
