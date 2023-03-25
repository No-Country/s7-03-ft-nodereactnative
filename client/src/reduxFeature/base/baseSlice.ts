import { createSlice, PayloadAction } from '@reduxjs/toolkit';


//Esto es solo un ejemplo - debe borrarse luego
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value++;
        },
        amoutAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { incremented, amoutAdded } = counterSlice.actions;
export default counterSlice.reducer;
