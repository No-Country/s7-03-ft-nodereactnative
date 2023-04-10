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
        setDelete: () => initialState,
    },
});

export const { setUsers, setDelete } = userSlice.actions;

export default userSlice.reducer;
