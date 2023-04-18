import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { colors, safeTopSpace } from '../../constants';
import TotalCart from './TotalCart';
import CardProduct from './CardProduct';

const Cart = () => {
    return (
        <View
            style={{
                paddingTop: 15,
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: 'white',
                position: 'relative',
            }}
        >
            <View>
                <StatusBar backgroundColor={colors.primaryLight} />
                <Text
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        letterSpacing: 1,
                        marginHorizontal: 10,
                    }}
                >
                    Carrito de compras
                </Text>
                <CardProduct />
            </View>
            <TotalCart />
        </View>
    );
};

export default Cart;
