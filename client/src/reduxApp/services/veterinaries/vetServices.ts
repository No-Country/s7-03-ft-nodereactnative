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
        // baseUrl rey: http://192.168.0.77:5000
        baseUrl: 'http://192.168.11.128:5000',
        // baseUrl: 'http://192.168.0.77:5000',
        // baseUrl: 'https://petdidos-ya.wl.r.appspot.com/',
        // baseUrl: 'http://192.168.100.2:5000',
        // baseUrl: `${API_APP_BASE_URL}:5000`,
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