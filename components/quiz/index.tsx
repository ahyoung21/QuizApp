import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../store/store';
import Button from '../layout/button/index';
import { QuizBox } from './style';

const Quiz = () => {
  const data = useSelector((state) => state.quiz.data);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <QuizBox>quiz</QuizBox>;
};

export default Quiz;
