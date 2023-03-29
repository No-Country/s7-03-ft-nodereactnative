import { configureStore } from '@reduxjs/toolkit';
import { baseSlice } from '../reduxFeature';
import { userApi } from '../reduxFeature/user/userSlice';

export const store = configureStore({
    reducer: {
        counter: baseSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
