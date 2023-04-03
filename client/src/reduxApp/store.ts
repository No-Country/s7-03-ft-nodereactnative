import { configureStore } from '@reduxjs/toolkit';
import { baseSlice } from '../reduxFeature';
import authSlice from '../reduxFeature/auth/authSlice';
import { userApi } from './services/auth/auth';

export const store = configureStore({
    reducer: {
        counter: baseSlice,
        [userApi.reducerPath]: userApi.reducer,
        authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
