import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { RootState } from '../../store';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_APP_BASE_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authSlice.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                headers.set('Content-Type', 'multipart/form-data')
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/v1/products',
            providesTags: ['Product'],
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                
                    url: '/v1/products',
                    method: 'POST',
                    body: product,
            }),
            // invalidatesTags: ['Product'],
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productsApi;
