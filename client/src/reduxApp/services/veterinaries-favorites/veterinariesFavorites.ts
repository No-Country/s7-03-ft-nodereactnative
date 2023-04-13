import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_APP_BASE_URL } from '@env';
import { RootState } from '../../store';

export const veterinariesFavoritesApi = createApi({
    reducerPath: 'veterinariesFavorites',
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
        getVeterinariesFavorites: builder.query({
            query: () => '/v1/veterinaries-favorites',
        }),
        createFavVeterinarie: builder.mutation({
            query: (veterinarieId) => {
                return {
                    url: '/v1/veterinaries-favorites',
                    method: 'POST',
                    body: JSON.stringify(veterinarieId),
                };
            },
        }),
    }),
});

export const {
    useGetVeterinariesFavoritesQuery,
    useCreateFavVeterinarieMutation,
} = veterinariesFavoritesApi;
