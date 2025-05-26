import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../components/productsAPI';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Types for hooks usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;