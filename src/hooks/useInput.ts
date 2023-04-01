import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from '../../store/store';

export type answerType = { [index: string]: string };

type UserInputProps = [string, (e: ChangeEvent) => void];

const useInput = (initialValue: string, validator?: (value: string) => boolean, displayMsg?: (msg: string) => void) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === 'function') willUpdate = validator(value);
    if (willUpdate) setValue(value);
  };

  const handleSubmit = () => {
    setValue('');

    value && displayMsg(value);
  };

  return { value, onChange, handleSubmit };
};

export default useInput;
