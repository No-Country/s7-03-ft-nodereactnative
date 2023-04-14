import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
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
    const { data, isLoading } = useGetProductsFavoritesQuery('');

    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <Text style={{ textAlign: 'center' }}>Productos favoritos</Text>
                {isLoading ? (
                    <ActivityIndicator size={30} />
                ) : data?.results?.productsFavorites?.length >= 1 ? (
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
                    <Text style={{ marginTop: 10 }}>
                        No tenes ningun {'\n'}producto favorito
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default ProductsFavorites;
