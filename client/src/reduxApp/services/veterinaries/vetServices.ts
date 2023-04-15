import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { VetInterface } from '../../../interfaces/vetInterfaces';
import { RootState } from '../../store';

export const vetApi = createApi({
    reducerPath: 'vets',
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
        getVeterinaries: builder.query({
            query: () => 'v1/veterinaries',
        }),
        getVeterinariesId: builder.query({
            query: (id) => `v1/veterinaries/${id}`,
        }),
        createVeterinarie: builder.mutation({
            query: (credentials) => {
                return {
                    url: 'v1/veterinaries',
                    method: 'POST',
                    body: JSON.stringify(credentials),
                };
            },
        }),
    }),
});

export const {
    useGetVeterinariesQuery,
    useCreateVeterinarieMutation,
    useGetVeterinariesIdQuery,
} = vetApi;
