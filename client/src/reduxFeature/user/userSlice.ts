import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, { payload: { user, token } }) => {
            state.user = user;
            state.token = token;
        },
    },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
