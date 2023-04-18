import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components';
import { Ionicons } from '@expo/vector-icons';

const TotalCart = () => {
    return (
        <View
            style={{
                borderBottomColor: '#abb1ae',
                borderTopWidth: 1,
                borderTopColor: '#abb1ae',
            }}
        >
            <View
                style={{
                    marginHorizontal: 10,
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ textTransform: 'uppercase', fontWeight: '600' }}>
                    Total
                </Text>
                <Text
                    style={{
                        textTransform: 'uppercase',

                        fontWeight: '600',
                    }}
                >
                    {' '}
                    $ 91.398,00
                </Text>
            </View>
            <View
                style={{
                    marginHorizontal: 10,
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity
                    style={{ backgroundColor: 'black', height: 35 }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                textTransform: 'uppercase',
                                color: 'white',
                                marginLeft: 10,
                                fontWeight: '600',
                            }}
                        >
                            Pagar
                        </Text>
                        <Ionicons
                            size={30}
                            color="white"
                            name="arrow-forward-outline"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TotalCart;
