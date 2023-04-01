import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';
import { useSelector, useDispatch } from '../../store/store';

export type answerType = { [index: string]: string };

type UserInputProps = [string, (e: ChangeEvent) => void];

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
};

export default useScroll;
