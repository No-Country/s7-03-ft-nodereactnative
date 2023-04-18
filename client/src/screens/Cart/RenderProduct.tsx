import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RenderProduct = () => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                marginTop: 5,
                height: 120,
                backgroundColor: '#ebebeb',
            }}
        >
            <Image
                source={require('../../../assets/veterinaryLoc.webp')}
                style={{
                    height: '100%',
                    maxWidth: 80,
                }}
            />
            <View>
                <Text
                    style={{
                        backgroundColor: 'white',
                        width: '90%',
                        textAlign: 'center',
                    }}
                >
                    $ 50.500,00
                </Text>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontWeight: '600' }}>
                        Juguete para perro
                    </Text>
                    <Text>Cantidad: 2</Text>
                </View>
                <TouchableOpacity
                    style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        padding: 4,
                        borderRadius: 2,
                        marginTop: 2,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                textTransform: 'uppercase',
                            }}
                        >
                            Guardar{' '}
                        </Text>
                        <Ionicons color={'black'} name="heart-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Ionicons size={30} name="ellipsis-vertical" />
            </View>
        </View>
    );
};

export default RenderProduct;
