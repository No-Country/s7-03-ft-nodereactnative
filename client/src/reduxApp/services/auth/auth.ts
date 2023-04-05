import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseLogin } from './types';
import { API_APP_BASE_URL } from '@env';
interface UserCredentials {
    email: string;
    password: string;
}

interface Data {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
}

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://192.168.11.128:5000',
        baseUrl: `${API_APP_BASE_URL}:5000`,
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
        registerUser: builder.mutation({
            query: ({
                firstName,
                lastName,
                password,
                email,
                country,
            }: Data) => ({
                url: '/api/v1/auth/signup',
                method: 'POST',
                body: { firstName, lastName, password, email, country },
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
