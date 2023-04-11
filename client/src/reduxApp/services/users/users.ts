import { API_APP_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { Response } from '../../../../../server/dist/src/interceptors/transform.interceptor';
import { AuthSlice } from '../../../router/Router';
import { RootState } from '../../store';

export interface UserId {
    id: string;
}

interface UserUpdate {
    firstName?: string;
    lastName?: string;
    country?: string;
    codePhone?: string;
    phone?: string;
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_APP_BASE_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authSlice.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUser: builder.query<UserId, string>({
            query: (id) => ({
                url: `/api/v1/users/${id}`,
            }),
        }),
        updateUser: builder.mutation<UserId, { id: string; data: UserUpdate }>({
            query: ({ id, data }) => {
                console.log('viene de updateUser', data);
                console.log('viene de updateUser', id);
                return {
                    url: `/api/v1/users/${id}`,
                    method: 'PATCH',
                    body: JSON.stringify(data),
                };
            },
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/api/v1/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } =
    userApi;
