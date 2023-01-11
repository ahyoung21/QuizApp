import { store } from '../store';
import {
  answerAction,
  incorrectAnswerAction,
  stepAction,
  dayAction,
  asyncQuizFetch,
} from './quizSlice';

describe('store/quizSlice', () => {
  test('stepAction', () => {
    store.dispatch(stepAction(1));
    const { currentStep } = store.getState().quiz;

    expect(currentStep).toBe(1);
  });
  test('quiz/fetch/loading', () => {
    store.dispatch({ type: 'quizSlice/asyncQuizFetch/pending' });
    const { status } = store.getState().quiz;

    expect(status).toBe('Loading');
  });

  test('quiz/fetch/complete', () => {
    store.dispatch({ type: 'quizSlice/asyncQuizFetch/fulfilled' });
    const { status } = store.getState().quiz;

    expect(status).toBe('complete');
  });

  test('quiz/fetch/fail', () => {
    store.dispatch({ type: 'quizSlice/asyncQuizFetch/rejected' });
    const { status } = store.getState().quiz;

    expect(status).toBe('fail');
  });
});
