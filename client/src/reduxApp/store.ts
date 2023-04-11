import { configureStore } from '@reduxjs/toolkit';
// Slices
import authSlice from '../reduxFeature/auth/authSlice';
import userSlice from '../reduxFeature/user/userSlice';
import veterinariesSlice from '../reduxFeature/veterinaries/veterinariesSlice';
// Api
import { authApi } from './services/auth/auth';
import { userApi } from './services/users/users';
import { vetApi } from './services/veterinaries/vetServices';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [vetApi.reducerPath]: vetApi.reducer,
        authSlice,
        userSlice,
        veterinariesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            vetApi.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
