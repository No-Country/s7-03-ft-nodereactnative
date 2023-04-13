import { createSlice } from '@reduxjs/toolkit';

interface Payload {
    payload: VetPosition
}

export interface VetPosState {
    vetPositionSlice: VetPosition
}

export interface VetPosition {
    longitude:number | null
    latitude: number | null
};

const initialState: VetPosition = {
    longitude:null,
    latitude: null,
};

const vetPositionSlice = createSlice({
    name: 'vetPosition',
    initialState,
    reducers: {
        setVetPosition: (state, { payload: { longitude, latitude } }: Payload) => {
            state.longitude = longitude;
            state.latitude = latitude
        },
        setVetDeletePosition: () => initialState,
    },
});

export const { setVetDeletePosition, setVetPosition } = vetPositionSlice.actions;

export default vetPositionSlice.reducer;