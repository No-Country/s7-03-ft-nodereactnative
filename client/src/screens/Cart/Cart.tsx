import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { colors, safeTopSpace } from '../../constants';
import TotalCart from './TotalCart';
import CardProduct from './CardProduct';
import EmptyCart from './EmptyCart';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartSelector =useSelector(state=>state.cartSlice)
    console.log(cartSelector);
    
    const cart = true;

    return (
        <View
            style={{
                paddingTop: 15,
                backgroundColor: 'white',
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
                        marginVertical: 20,
                    }}
                >
                    Carrito de compras
                </Text>
                {cart ? <CardProduct cart={cartSelector} /> : <EmptyCart />}
            </View>
        </View>
    );
};

export default Cart;
