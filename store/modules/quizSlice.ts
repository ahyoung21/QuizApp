import {
  createSlice,
  PayloadAction,
  Draft,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as config from '../../common/config';

export interface QuizState {
  value: number;
  status: string;
  data: {
    name: string;
    weather: [];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
  };
}

const initialState: QuizState = {
  value: 0,
  status: '',
  data: {
    name: '',
    weather: [],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
  },
};

const asyncQuizFetch = createAsyncThunk(
  'quizSlice/asyncWeatherFetch',
  async () => {
    const response = await fetch(`${config.QUIZ_API}?amount=10&type=multiple`);
    const data = await response.json();
    return data;
  }
);

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
    incrementByAmount: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
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
export const { increment, decrement, incrementByAmount } = quizSlice.actions;

export default quizSlice.reducer;
export { asyncQuizFetch };
