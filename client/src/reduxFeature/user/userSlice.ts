import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserCredentials {
    email: string;
    password: string;
}
interface UserState {
    data: {
        email: string;
        password: string;
    };
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<UserState[], UserCredentials>({
            query: (credentials) => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body: JSON.stringify(credentials),
            }),
        }),
    }),
});

export const { useLoginUserMutation } = userApi;
