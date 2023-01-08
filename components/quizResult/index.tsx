import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from '../../store/store';
import { dayAction, asyncQuizFetch } from '../../store/modules/quizSlice';
import dayjs from 'dayjs';
import { QuizResultBox } from './style';
import Chart from '../layout/chart';
import Button from '../layout/button/index';

export type chartType = {
  id: string;
  label: string;
  value: number;
  color: string;
};

const QuizResult = () => {
  const answerData = useSelector((state) => state.quiz.answerValue);
  const incorrectAnswerData = useSelector((state) => state.quiz.incorrectAnswerValue);
  const startTime = useSelector((state) => state.quiz.startTime);
  const [time, setTime] = useState('');
  const [chartData, setChartData] = useState<chartType[]>([
    {
      id: '정답',
      label: '정답',
      value: answerData.length,
      color: 'hsl(267, 70%, 50%)',
    },
    {
      id: '오답',
      label: '오답',
      value: incorrectAnswerData.length,
      color: 'hsl(299, 70%, 50%)',
    },
  ]);

  // 퀴즈 푼 소요시간 구하는 함수
  const getTimeDiff = (): string => {
    let result;
    const dateFormat = 'YYYY-MM-DD HH:mm:ss.SSS';
    const dateStart = dayjs(startTime, dateFormat);
    const dateEnd = dayjs(dayjs().format(dateFormat), dateFormat);

    dateStart.format(dateFormat);
    dateEnd.format(dateFormat);

    const timeCompared = dateEnd.diff(dateStart);

    const hour = Math.floor((timeCompared / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeCompared / (1000 * 60)) % 60);
    const second = Math.floor((timeCompared / 1000) % 60);

    result = `${hour}시 ${minutes}분 ${second}초`;

    return result;
  };

  const goNextStep = () => {
    Router.push('/quiz/note');
  };

  useEffect(() => {
    setTime(getTimeDiff());
    if (answerData.length === 0 && incorrectAnswerData.length === 0) {
      Router.push('/');
    }
  }, []);

  return (
    <>
      <h3>결과</h3>
      <QuizResultBox>
        <p>총 소요 시간 : {time}</p>
        <Chart chartData={chartData} />
        {incorrectAnswerData.length > 0 && <Button text={'오답노트'} goNextStep={goNextStep} />}
      </QuizResultBox>
    </>
  );
};

export default QuizResult;
