import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    veterinaries: [],
    idVeterinarie: null,
};

const veterinariesSlice = createSlice({
    name: 'veterinaries',
    initialState,
    reducers: {
        SetVeterinaries: (state, { payload }) => {
            state.veterinaries = payload;
        },
        setDelete: () => initialState,
        setFavVeterinarie: (state, { payload }) => {
            state.idVeterinarie = payload;
        },
    },
});

export const { SetVeterinaries, setDelete, setFavVeterinarie } =
    veterinariesSlice.actions;

export default veterinariesSlice.reducer;
