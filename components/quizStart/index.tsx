import { FC, useState, useEffect, useMemo, useRef } from 'react';

import Router from 'next/router';
import { useSelector, useDispatch } from '../../store/store';
import { dayAction, asyncQuizFetch } from '../../store/modules/quizSlice';
import Button from '../layout/button/index';
import { QuizStartBox } from './style';
import dayjs from 'dayjs';
import Image from 'next/image';
import bgQuiz from '../../public/images/bg_quiz.jpg';
import * as config from '../../common/config';
import { QuizState } from '../../store/modules/quizSlice';
import useGetQuizList from '@api/queries/useGetQuizList';
import { QuizSchema } from '@api/getQuizList';
import useInput from 'src/hooks/useInput';
import useTabs from 'src/hooks/useTabs';
import { tabType } from 'src/hooks/useTabs';
import useFetch from 'src/hooks/useFetch';
import useTitle from 'src/hooks/useTitle';
import useClick from 'src/hooks/useClick';
import useConfirm from 'src/hooks/useConfirm';
import usePreventLeave from 'src/hooks/usePreventLeave';
import useBeforeLeave from 'src/hooks/useBeforeLeave';
import useFadeIn from 'src/hooks/useFadeIn';
import useNetWork from 'src/hooks/useNetWork';
import useScroll from 'src/hooks/useScroll';
import useFullScreen from 'src/hooks/useFullScreen';
import useNotification from 'src/hooks/useNotification';

const validator = (value: string) => {
  return value.length < 10;
};

const displayMsg = (msg: string) => {
  alert(msg);
};

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2",
  },
];

const QuizStart: FC = () => {
  const triggerNotif = useNotification('Can I?');
  const checkFullScreen = (check: boolean) => {
    console.log(check);
  };
  const { element, makeFullScreen, exitFullScreen } = useFullScreen(checkFullScreen);
  const scroll = useScroll();
  const handleOnLine = (onLine: boolean) => {
    // console.log(onLine ? 'we just went online' : 'we are offline');
  };
  const onLine = useNetWork(handleOnLine);

  const fadeInEl = useFadeIn(1, 1);
  const { isLoading, data, error, refetch } = useGetQuizList();
  const [quizData, setQuizData] = useState<QuizSchema>();
  const name = useInput('ahyoung', validator, displayMsg);
  // const { currentItem, changeItem } = useTabs(0, content);
  const { data: test, fetchUrl } = useFetch('https://jsonplaceholder.typicode.com', 'todos');
  const { setTitle } = useTitle('first');

  const onClickButton = () => {
    console.log('데이터를 다시 가져왔어요');
    refetch();
  };

  useEffect(() => {
    console.log(isLoading, data, error);
  }, [isLoading, data, error]);

  const deleteWorld = () => console.log('deleting...');
  const rejectWorld = () => console.log('취소');
  const confirm = useConfirm('삭제하시겠습니까?', deleteWorld, rejectWorld);
  const { enablePrevent, disablePrevent } = usePreventLeave();

  const onLeave = () => console.log('plz');
  useBeforeLeave(onLeave);

  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.quiz.currentStep);

  useEffect(() => {
    dispatch(dayAction(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')));
  }, []);

  const onClickQuiz = () => {
    dispatch(asyncQuizFetch());
    Router.push('/quiz');
  };

  return (
    <QuizStartBox>
      {!isLoading &&
        data?.results.map((result, idx) => {
          return <>{result.category}</>;
        })}
      <button onClick={onClickButton}>데이터 받아오기</button>
      <div ref={element}>
        <img
          src="https://upload.wikimedia.org/wikipedia/ko/thumb/d/d4/%ED%8E%AD%EC%88%98.jpg/300px-%ED%8E%AD%EC%88%98.jpg"
          alt=""
        />
        <button onClick={exitFullScreen}>exit full screen</button>
      </div>
      <button onClick={makeFullScreen}>make full screen</button>
      <h1>{onLine ? 'online' : 'offline'}</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={confirm}>delete</button>
      <div {...fadeInEl}>Fade In</div>
      <button
        onClick={() => {
          fetchUrl('users');
        }}
      >
        users
      </button>

      {/* <input placeholder="name" type="text" {...name} />
      <button
        onClick={() => {
          name.handleSubmit();
        }}
      >
        확인
      </button>
      <Image
        src={bgQuiz}
        alt="퀴즈 이미지"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        placeholder="blur"
      />
      <Button text="퀴즈 풀기" goNextStep={onClickQuiz} /> */}
      {/* {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div> */}
    </QuizStartBox>
  );
};
export default QuizStart;
