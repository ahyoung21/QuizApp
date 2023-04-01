import React, { useState, ChangeEvent } from 'react';
import { CheckedTypeRadioBox } from './style';
import useInput from 'src/hooks/useInput';

interface ChildProps {
  description: string;
  currentStep: number;
  handleInputValue: (params: any, correctAnswer: boolean, currentStep: number) => void;
  correctAnswer: boolean;
  isChecked: boolean;
  getCorrectAnswer: (params: boolean) => void;
}

const CheckedTypeRadio = ({
  description,
  currentStep,
  handleInputValue,
  correctAnswer,
  isChecked,
  getCorrectAnswer,
}: ChildProps) => {
  const [checkedValue, setCheckedValue] = useState('');

  const handleRadioChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckedValue(value);
    getCorrectAnswer(correctAnswer);
  };

  return (
    <CheckedTypeRadioBox>
      <input
        type="text"
        name="hi"
        value={'huhu'}
        onChange={(e) => {
          useInput(e, correctAnswer, currentStep);
        }}
      />
      <label htmlFor={description.replace(/ /g, '')}>
        <input
          type="radio"
          id={description.replace(/ /g, '')}
          name="answer"
          value={description}
          checked={checkedValue === description}
          onChange={
            !isChecked
              ? (e) => {
                  handleRadioChecked(e);
                  handleInputValue(e, correctAnswer, currentStep);
                }
              : undefined
          }
        />

        <span>
          <pre
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </span>
      </label>
    </CheckedTypeRadioBox>
  );
};

export default CheckedTypeRadio;
