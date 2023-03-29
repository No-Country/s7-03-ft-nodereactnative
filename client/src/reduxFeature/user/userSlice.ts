import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useFormState } from 'react-hook-form';

interface UserState {
    name: string;
    password: string;
    status: string;
    userInfo: {
        token: string;
        id: string;
        isLogged: string;
    };
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://randomuser.me/api',
    }),
    endpoints: (builder) => ({
        getRandomNames: builder.query<UserState[], number | undefined>({
            query: () => `/?results=10`,
        }),
    }),
});

export const { useGetRandomNamesQuery } = userApi;
