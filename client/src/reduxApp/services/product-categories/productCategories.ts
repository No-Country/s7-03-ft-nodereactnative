import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { RootState } from '../../store';

export const productsCategoryApi = createApi({
    reducerPath: 'productsCategory',
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
    tagTypes: ['ProductCategory'],
    endpoints: (builder) => ({
        getProductsCategory: builder.query({
            query: () => '/v1/product-categories',
            providesTags: ['ProductCategory'],
        }),
    }),
});

export const { useGetProductsCategoryQuery } = productsCategoryApi;
