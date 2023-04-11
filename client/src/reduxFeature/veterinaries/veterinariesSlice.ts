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
    },
});

export const { SetVeterinaries, setDelete } = veterinariesSlice.actions;

export default veterinariesSlice.reducer;
