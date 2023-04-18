import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const EmptyCart = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '70%',
            }}
        >
            <Text>Tu Carrito esta vacio!</Text>
            <TouchableOpacity>
                <Text>Ir a productos!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EmptyCart;
