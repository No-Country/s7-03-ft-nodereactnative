import React from 'react';
import { View } from 'react-native';
import ProductsFavorites from './ProductsFavorites';
import VeterinariesFavorites from './VeterinariesFavorites';

const Favorites = () => {
    return (
        <View
            style={{
                paddingTop: 10,
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                gap: 20,
                backgroundColor: 'white',
            }}
        >
            <VeterinariesFavorites />
            <ProductsFavorites />
        </View>
    );
};

export default Favorites;
