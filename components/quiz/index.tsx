import React, { useState, useEffect, KeyboardEvent } from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from '../../store/store';
import {
  stepAction,
  answerAction,
  incorrectAnswerAction,
  answerType,
  quizType,
} from '../../store/modules/quizSlice';
import Button from '../layout/button/index';
import CheckedTypeRadio from '../checkedTypeRadio/index';
import { QuizBox } from './style';

const Quiz = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quiz.data);
  const currentStep = useSelector((state) => state.quiz.currentStep);
  const [isChecked, setIsChecked] = useState(false);
  const [answerValue, setAnswerValue] = useState<answerType[]>([]);
  const [incorrectAnswerValue, setIncorrectAnswerValue] = useState<answerType[]>([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [answerFlag, setAnswerFlag] = useState(false);

  const handleInputValue = (
    e: KeyboardEvent<HTMLInputElement>,
    correctAnswer: boolean,
    currentStep: number
  ) => {
    const { name, value } = e.currentTarget;

    if (correctAnswer) {
      setAnswerValue([...answerValue, { [name]: value }]);
    } else {
      setIncorrectAnswerValue([
        ...incorrectAnswerValue,
        { [name]: value, question: quizData[currentStep].question },
      ]);
    }
    setIsChecked(!isChecked);
  };

  // 다음 문항으로 이동되는 함수
  const goNextStep = () => {
    dispatch(stepAction(1));
    setIsChecked(false);
  };

  const getCorrectAnswer = (value: boolean) => {
    setAnswerFlag(value);
  };

  useEffect(() => {
    // console.log(
    //   quizData.map((item) => {
    //     return item.correct_answer;
    //   })
    // );
  }, [currentStep]);

  useEffect(() => {
    setAnswerFlag(false);

    if (currentStep !== 0 && currentStep === quizData.length) {
      setIsCompleted(true);
    }

    console.log('currentStep', currentStep);
    console.log('answerValue', answerValue);
    console.log('incorrectAnswerValue', incorrectAnswerValue);
  }, [currentStep]);

  useEffect(() => {
    if (isCompleted) {
      dispatch(answerAction(answerValue));
      dispatch(incorrectAnswerAction(incorrectAnswerValue));
      Router.push('/quiz/result');
    }
  }, [isCompleted]);

  return (
    <QuizBox>
      {quizData.length > 0 &&
        quizData.map((quiz: quizType, idx: number) => {
          return currentStep === idx ? (
            <div key={idx}>
              <h3>
                <pre
                  dangerouslySetInnerHTML={{
                    __html: quiz.question,
                  }}
                />
              </h3>
              <ul>
                <li>
                  <CheckedTypeRadio
                    correctAnswer={true}
                    handleInputValue={handleInputValue}
                    currentStep={currentStep}
                    description={quiz.correct_answer}
                    isChecked={isChecked}
                    getCorrectAnswer={getCorrectAnswer}
                  />
                </li>
                {quiz.incorrect_answers.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <CheckedTypeRadio
                        correctAnswer={false}
                        handleInputValue={handleInputValue}
                        currentStep={currentStep}
                        description={item}
                        isChecked={isChecked}
                        getCorrectAnswer={getCorrectAnswer}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null;
        })}
      {isChecked && (
        <>
          <p>{answerFlag ? '정답입니다.' : '틀렸습니다.'}</p>
          <Button
            text={quizData.length === currentStep + 1 ? '결과보러 가기' : '다음 문항'}
            goNextStep={goNextStep}
          />
        </>
      )}
    </QuizBox>
  );
};

export default Quiz;
