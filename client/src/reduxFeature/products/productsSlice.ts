import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idProduct: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setDelete: () => initialState,
        setFavProduct: (state, { payload }) => {
            state.idProduct = payload;
        },
    },
});

export const { setDelete, setFavProduct } = productSlice.actions;

export default productSlice.reducer;
