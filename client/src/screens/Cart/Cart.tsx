import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { colors } from '../../constants';

const Cart = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <StatusBar backgroundColor={colors.primaryLight} />
            <Text>Carrito de compras</Text>
        </View>
    );
};

export default Cart;
