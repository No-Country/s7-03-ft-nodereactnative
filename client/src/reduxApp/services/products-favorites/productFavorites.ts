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
    tagTypes: ['FavProducts'],
    endpoints: (builder) => ({
        getProductsFavorites: builder.query({
            query: () => '/v1/products-favorites',
            providesTags: ['FavProducts'],
        }),
        createFavProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: '/v1/products-favorites',
                    method: 'POST',
                    body: JSON.stringify(productId),
                };
            },
            invalidatesTags: ['FavProducts'],
        }),
        deleteFavProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/v1/products-favorites/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['FavProducts'],
        }),
    }),
});

export const {
    useGetProductsFavoritesQuery,
    useCreateFavProductMutation,
    useDeleteFavProductMutation,
} = productFavoritesApi;
