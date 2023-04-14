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
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/v1/products',
        }),
        createProduct: builder.mutation({
            query: (product) => {
                return {
                    url: '/v1/products',
                    method: 'POST',
                    body: JSON.stringify(product),
                };
            },
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productsApi;
