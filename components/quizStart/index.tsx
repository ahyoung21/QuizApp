import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from '../../store/store';
import { dayAction, asyncQuizFetch } from '../../store/modules/quizSlice';
import Button from '../layout/button/index';
import { QuizStartBox } from './style';
import dayjs from 'dayjs';
import Image from 'next/image';
import bgQuiz from '../../public/images/bg_quiz.jpg';

const QuizStart = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.quiz.currentStep);

  useEffect(() => {
    dispatch(dayAction(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')));
    console.log('currentStep', currentStep);
  }, []);

  const onClickQuiz = () => {
    dispatch(asyncQuizFetch());
    Router.push('/quiz');
  };

  return (
    <QuizStartBox>
      <Image
        src={bgQuiz}
        alt="퀴즈 이미지"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        placeholder="blur"
      />
      <Button text="퀴즈 풀기" goNextStep={onClickQuiz} />
    </QuizStartBox>
  );
};
export default QuizStart;
