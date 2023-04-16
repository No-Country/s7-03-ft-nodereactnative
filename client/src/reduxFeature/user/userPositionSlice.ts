import { createSlice } from '@reduxjs/toolkit';

interface Payload {
    payload: Position
}

export interface PosState {
    userPositionSlice: Position
}

export interface Position {
    city: string | null
    longitude:number | null
    latitude: number | null
};

const initialState: Position = {
    city: null,
    longitude:null,
    latitude: null,
};

const userPositionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        setPosition: (state, { payload: { city, longitude, latitude } }: Payload) => {
            state.city = city;
            state.longitude = longitude;
            state.latitude = latitude
        },
        setDeletePosition: () => initialState,
    },
});

export const { setDeletePosition, setPosition } = userPositionSlice.actions;

export default userPositionSlice.reducer;