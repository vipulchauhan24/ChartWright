import { configureStore } from '@reduxjs/toolkit';
import { ApplicationRootState } from './types';
import barChartReducer from '@/app/components/BarChart/reducer';

export const makeStore = (initialState: ApplicationRootState | {} = {}) => {
  return configureStore({
    reducer: {
      barChart: barChartReducer
    },
    preloadedState: initialState,
    devTools: true //use redux-devtools
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
