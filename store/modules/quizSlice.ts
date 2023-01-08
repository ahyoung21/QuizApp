import { createSlice, PayloadAction, Draft, createAsyncThunk } from '@reduxjs/toolkit';
import * as config from '../../common/config';

export type answerType = { [index: string]: string };
export type quizType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export interface QuizState {
  data: quizType[];
  currentStep: number;
  answerValue: answerType[];
  incorrectAnswerValue: answerType[];
  startTime: string;
  status: string;
}

const initialState: QuizState = {
  data: [],
  currentStep: 0,
  answerValue: [],
  incorrectAnswerValue: [],
  startTime: '',
  status: '',
};

const asyncQuizFetch = createAsyncThunk('quizSlice/asyncWeatherFetch', async () => {
  try {
    const response = await fetch(`${config.QUIZ_API}?amount=10&type=multiple`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    alert(config.MESSAGE['common-error']);
  }
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    dayAction: (state: Draft<typeof initialState>, action: PayloadAction<string>) => {
      state.startTime = action.payload;
    },
    stepAction: (state: Draft<typeof initialState>, action: PayloadAction<number>) => {
      state.currentStep = state.currentStep + action.payload;
    },
    answerAction: (state: Draft<typeof initialState>, action: PayloadAction<answerType[]>) => {
      state.answerValue = [...action.payload];
    },
    incorrectAnswerAction: (
      state: Draft<typeof initialState>,
      action: PayloadAction<answerType[]>
    ) => {
      state.incorrectAnswerValue = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncQuizFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncQuizFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncQuizFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

// Action creators are generated for each case reducer function
export const { answerAction, incorrectAnswerAction, stepAction, dayAction } = quizSlice.actions;

export default quizSlice.reducer;
export { asyncQuizFetch };
