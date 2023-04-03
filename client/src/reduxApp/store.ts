import { configureStore } from '@reduxjs/toolkit';
import { baseSlice } from '../reduxFeature';
import { apiAuthSlice } from './api-slices/auth-api-slice';

export const store = configureStore({
    reducer: {
        counter: baseSlice,
        [apiAuthSlice.reducerPath]: apiAuthSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiAuthSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
