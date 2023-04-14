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
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <Text style={{ textAlign: 'center' }}>Productos favoritos</Text>
                {data?.results?.productsFavorites?.length >= 1 ? (
                    data?.results?.productsFavorites.map(
                        (product: ProductFav) => {
                            return (
                                <RenderFav
                                    product={product}
                                    key={product?.productId}
                                />
                            );
                        }
                    )
                ) : (
                    <Text>No tenes ningun producto favorito</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default ProductsFavorites;
