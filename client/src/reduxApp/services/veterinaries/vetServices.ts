import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { VetInterface } from '../../../interfaces/vetInterfaces';

interface UserCredentials {
    email: string;
    password: string;
}

export const vetApi = createApi({
    reducerPath: 'vets',
    baseQuery: fetchBaseQuery({
        baseUrl: API_APP_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getVeterinaries: builder.query({
            query: ()=>'/api/v1/veterinaries'
        }),
        
    }),
});

export const { useGetVeterinariesQuery } = vetApi;