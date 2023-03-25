import { configureStore } from '@reduxjs/toolkit';
import { baseSlice } from '../reduxFeature';

export const store = configureStore({
    reducer: {
        counter: baseSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
