import { configureStore } from '@reduxjs/toolkit';
import { baseSlice } from '../reduxFeature';
// Slices
import authSlice from '../reduxFeature/auth/authSlice';
import userSlice from '../reduxFeature/user/userSlice';
// Api
import { authApi } from './services/auth/auth';
import { userApi } from './services/users/users';

export const store = configureStore({
    reducer: {
        counter: baseSlice,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        authSlice,
        userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
