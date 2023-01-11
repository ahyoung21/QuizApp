import { render } from '@testing-library/react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage';
// As a basic setup, import your same slice reducers
import counterSlice from '../store/modules/counterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: persistedReducer,
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
