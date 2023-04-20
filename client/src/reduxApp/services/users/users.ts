import { API_APP_BASE_URL } from '@env';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { Veterinaria } from '../auth/types';

export interface UserId {
    id: string;
}

interface GetUserResponse {
    results: {
        user: {
            codePhone: string;
            country: string;
            createdAt: Date;
            email: string;
            firstName: string;
            id: string;
            isActive: boolean;
            lastName: string;
            phone: string;
            roleId: string;
            updatedAt: Date;
            veterinary: Array<Veterinaria>;
        };
    };
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
        getUser: builder.query<GetUserResponse, string>({
            query: (id) => ({
                url: `/v1/users/${id}`,
            }),
        }),
        updateUser: builder.mutation<UserId, { id: string; data: UserUpdate }>({
            query: ({ id, data }) => {
                return {
                    url: `/v1/users/${id}`,
                    method: 'PATCH',
                    body: JSON.stringify(data),
                };
            },
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/v1/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } =
    userApi;
