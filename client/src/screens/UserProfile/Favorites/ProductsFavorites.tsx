import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useGetProductsFavoritesQuery } from '../../../reduxApp/services/products-favorites/productFavorites';
import RenderFav from './RenderFav';

export interface ProductFav {
    id: string;
    userId: string;
    productId: string;
    product: Product;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    quantity: number;
    veterinaryId: string;
    productCategoryId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProductsFavorites = () => {
    const { data } = useGetProductsFavoritesQuery('');
    console.log(
        'estas son tus productos favoritos:',
        data?.results?.productsFavorites
    );

    return (
        <View>
            <Text>Estos son tus productos favoritos:</Text>
            {data?.results?.productsFavorites?.length >= 1 ? (
                data?.results?.productsFavorites.map((product: ProductFav) => {
                    return (
                        <ScrollView key={product?.productId} horizontal>
                            <RenderFav product={product} />
                        </ScrollView>
                    );
                })
            ) : (
                <Text>No tenes ningun producto favorito</Text>
            )}
        </View>
    );
};

export default ProductsFavorites;
