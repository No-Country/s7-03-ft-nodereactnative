import { configureStore } from '@reduxjs/toolkit';
// Slices
import authSlice from '../reduxFeature/auth/authSlice';
import userSlice from '../reduxFeature/user/userSlice';
import userPositionSlice from '../reduxFeature/user/userPositionSlice';
import veterinariesSlice from '../reduxFeature/veterinaries/veterinariesSlice';
import vetPositionSlice from '../reduxFeature/veterinaries/vetPositionSlice';
import productSlice from '../reduxFeature/products/productsSlice';
import allProductSlice from '../reduxFeature/products/allProductsSlice';
import productCategorySlice from '../reduxFeature/products/productsCategorySlice';
// Api
import { authApi } from './services/auth/auth';
import { userApi } from './services/users/users';
import { vetApi } from './services/veterinaries/vetServices';
import { productFavoritesApi } from './services/products-favorites/productFavorites';
import { veterinariesFavoritesApi } from './services/veterinaries-favorites/veterinariesFavorites';
import { productsApi } from './services/products/products';
import { productsCategoryApi } from './services/product-categories/productCategories';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [vetApi.reducerPath]: vetApi.reducer,
        [productFavoritesApi.reducerPath]: productFavoritesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [productsCategoryApi.reducerPath]: productsCategoryApi.reducer,
        [veterinariesFavoritesApi.reducerPath]:
            veterinariesFavoritesApi.reducer,
        authSlice,
        userSlice,
        veterinariesSlice,
        userPositionSlice,
        productSlice,
        vetPositionSlice,
        allProductSlice,
        productCategorySlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            vetApi.middleware,
            productFavoritesApi.middleware,
            veterinariesFavoritesApi.middleware,
            productsApi.middleware,
            productsCategoryApi.middleware,
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
