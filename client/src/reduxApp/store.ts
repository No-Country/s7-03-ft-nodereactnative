import { configureStore } from '@reduxjs/toolkit';
// Slices
import authSlice from '../reduxFeature/auth/authSlice';
import userSlice from '../reduxFeature/user/userSlice';
import veterinariesSlice from '../reduxFeature/veterinaries/veterinariesSlice';
import productSlice from '../reduxFeature/products/productsSlice';
// Api
import { authApi } from './services/auth/auth';
import { userApi } from './services/users/users';
import { vetApi } from './services/veterinaries/vetServices';
import { productFavoritesApi } from './services/products-favorites/productFavorites';
import { veterinariesFavoritesApi } from './services/veterinaries-favorites/veterinariesFavorites';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [vetApi.reducerPath]: vetApi.reducer,
        [productFavoritesApi.reducerPath]: productFavoritesApi.reducer,
        [veterinariesFavoritesApi.reducerPath]:
            veterinariesFavoritesApi.reducer,
        authSlice,
        userSlice,
        veterinariesSlice,
        productSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            vetApi.middleware,
            productFavoritesApi.middleware,
            veterinariesFavoritesApi.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
