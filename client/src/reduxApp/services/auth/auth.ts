import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseLogin } from './types';

interface UserCredentials {
    email: string;
    password: string;
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.0.77:5000',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<ResponseLogin, UserCredentials>({
            query: (credentials) => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body: JSON.stringify(credentials),
            }),
        }),
    }),
});

export const { useLoginUserMutation } = userApi;
