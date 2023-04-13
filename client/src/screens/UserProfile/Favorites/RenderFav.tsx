import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ProductFav } from './ProductsFavorites';
import { VetFav } from './VeterinariesFavorites';

interface Props {
    vet?: VetFav | undefined;
    product?: ProductFav | undefined;
}

const RenderFav = ({ vet, product }: Props) => {
    return (
        <View
            style={{
                padding: 10,
                backgroundColor: 'green',
                flexDirection: 'row',
            }}
        >
            {vet && (
                <>
                    <Text>Nombre: {vet?.veterinary?.name}</Text>
                    <Text>Pais: {vet?.veterinary?.country}</Text>
                    <Text>Direccion: {vet?.veterinary?.address}</Text>
                    <Text>Telefono: {vet?.veterinary?.phone}</Text>
                </>
            )}
            {product && (
                <>
                    <Text>Producto: {product?.product?.name}</Text>
                    <Text>Categoria: {product?.product?.description}</Text>
                    <Text>Precio: {product?.product?.price}</Text>
                </>
            )}
        </View>
    );
};

export default RenderFav;
