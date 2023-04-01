import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';
import { useSelector, useDispatch } from '../../store/store';

export type answerType = { [index: string]: string };

type UserInputProps = [string, (e: ChangeEvent) => void];

const useFadeIn = (duration: Number, delay: Number) => {
  const element = useRef<HTMLElement>(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.opacity = '1';
      current.style.transition = `all ${duration}s ease-in-out ${delay}s`;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
