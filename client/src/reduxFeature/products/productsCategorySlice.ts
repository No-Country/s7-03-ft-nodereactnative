import { createSlice } from '@reduxjs/toolkit';

export interface ProductCategory  {
    id: string
    name: string
  }

const initialState:ProductCategory[] = []


const productCategorySlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        setDelete: () => initialState,
        setProductCategory: (state, { payload }) => {
            setDelete()
            payload.map((pay: ProductCategory)=>state.push(pay))
        },
    },
});

export const { setDelete, setProductCategory } = productCategorySlice.actions;

export default productCategorySlice.reducer;