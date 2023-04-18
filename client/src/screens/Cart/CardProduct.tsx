import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RenderProduct from './RenderProduct';

const CardProduct = () => {
    return (
        <View style={{ marginTop: 5 }}>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#abb1ae',
                    borderTopWidth: 1,
                    borderTopColor: '#abb1ae',
                    marginVertical: 5,
                }}
            >
                <Text
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginVertical: 15,
                        marginHorizontal: 10,
                    }}
                >
                    2 artículos
                </Text>
            </View>
            <ScrollView>
                <RenderProduct />
                <RenderProduct />
                <RenderProduct />
            </ScrollView>
        </View>
    );
};

export default CardProduct;
