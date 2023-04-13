import React from 'react';
import { View } from 'react-native';
import ProductsFavorites from './ProductsFavorites';
import VeterinariesFavorites from './VeterinariesFavorites';

const Favorites = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <VeterinariesFavorites />
            <ProductsFavorites />
        </View>
    );
};

export default Favorites;
