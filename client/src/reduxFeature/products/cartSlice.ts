import { createSlice } from '@reduxjs/toolkit';
import { Product } from './allProductsSlice';

const initialState : Product[]  = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setDelete: () => initialState,
        setCart: (state, { payload }) => {
            state.push(payload);
        },
    },
});

export const { setDelete, setCart } = cartSlice.actions;

export default cartSlice.reducer;