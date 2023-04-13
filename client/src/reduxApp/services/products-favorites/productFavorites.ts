import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { RootState } from '../../store';

export const productFavoritesApi = createApi({
    reducerPath: 'productFavorites',
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
        getProductsFavorites: builder.query({
            query: () => '/v1/products-favorites',
        }),
        createFavProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: '/v1/products-favorites',
                    method: 'POST',
                    body: JSON.stringify(productId),
                };
            },
        }),
    }),
});

export const { useGetProductsFavoritesQuery, useCreateFavProductMutation } =
    productFavoritesApi;
