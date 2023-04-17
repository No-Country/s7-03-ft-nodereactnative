import { createSlice } from '@reduxjs/toolkit';

export interface Product  {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    veterinaryId: string
    productCategoryId: string
    productCategory: {
      id: string
      name: string
    },
    productImage: []
  }

const initialState:Product[] = []


const allProductSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        setDelete: () => initialState,
        setAllProduct: (state, { payload }) => {
            setDelete()
            payload.map((pay: Product)=>state.push(pay))
        },
    },
});

export const { setDelete, setAllProduct } = allProductSlice.actions;

export default allProductSlice.reducer;