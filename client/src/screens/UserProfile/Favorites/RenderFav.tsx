import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { ProductFav } from './ProductsFavorites';
import { VetFav } from './VeterinariesFavorites';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    vet?: VetFav | undefined;
    product?: ProductFav | undefined;
}

const RenderFav = ({ vet, product }: Props) => {
    return (
        <>
            {vet && (
                <View
                    style={{
                        marginTop: 5,
                        maxWidth: 180,
                        borderWidth: 1,
                        gap: 0,
                        marginBottom: 10,
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <Text>Nombre: {vet?.veterinary?.name}</Text>
                    <Text>Direccion: {vet?.veterinary?.address}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10,

                            marginTop: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                console.log('elimiar vet', vet.id);
                            }}
                            style={{
                                borderWidth: 1,
                                padding: 2,
                                backgroundColor: 'red',
                                borderRadius: 5,
                                borderColor: 'red',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >
                                Eliminar
                                <Ionicons size={15} name="close-circle" />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('detalle de la vet', vet.id);
                            }}
                            style={{
                                borderWidth: 1,
                                padding: 2,
                                backgroundColor: 'green',
                                borderRadius: 5,
                                borderColor: 'green',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >
                                Ir a la tienda
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {product && (
                <TouchableOpacity
                    onPress={() => {
                        console.log('detalle de la vet', product.id);
                    }}
                    style={{
                        marginTop: 5,
                        maxWidth: 180,
                        borderWidth: 1,
                        gap: 0,
                        marginBottom: 10,
                        padding: 5,
                        borderRadius: 5,
                    }}
                >
                    <Text>Producto: {product?.product?.name}</Text>
                    <Text>Categoria: {product?.product?.description}</Text>
                    <Text>Precio: {product?.product?.price}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10,

                            marginTop: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                console.log('elimiar vet', product.id);
                            }}
                            style={{
                                borderWidth: 1,
                                padding: 2,
                                backgroundColor: 'red',
                                borderRadius: 5,
                                borderColor: 'red',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >
                                Eliminar
                                <Ionicons size={15} name="close-circle" />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('detalle de la vet', product.id);
                            }}
                            style={{
                                borderWidth: 1,
                                padding: 2,
                                backgroundColor: 'green',
                                borderRadius: 5,
                                borderColor: 'green',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >
                                Ir al producto
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
        </>
    );
};

export default RenderFav;
