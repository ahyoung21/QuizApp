import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../store/store';
import {
  decrement,
  incrementByAmount,
  asyncQuizFetch,
} from '../../store/modules/quizSlice';
import { QuizStartBox } from './style';
import ImgQuiz from '/public/images/bg_quiz.jpg';

const QuizStart = () => {
  const count = useSelector((state) => state.quiz.value);
  const data = useSelector((state) => state.quiz.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncQuizFetch());
    console.log('dat1a', data);
  }, []);

  return (
    <QuizStartBox>
      {/* <img src={ImgQuiz} alt="퀴즈 이미지" /> */}
      {/* <Button text="퀴즈 풀기" goNextStep={onClickQuiz} /> */}
    </QuizStartBox>
  );
};
export default QuizStart;
