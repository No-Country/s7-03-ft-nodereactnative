import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProductFav } from './ProductsFavorites';
import { VetFav } from './VeterinariesFavorites';
import { Ionicons } from '@expo/vector-icons';
import { useDeleteFavProductMutation } from '../../../reduxApp/services/products-favorites/productFavorites';
import { useDeleteFavVeterinarieMutation } from '../../../reduxApp/services/veterinaries-favorites/veterinariesFavorites';
import Alerts from '../../../components/Alerts/Alerts';
import { useState } from 'react';

interface Props {
    vet?: VetFav | undefined;
    product?: ProductFav | undefined;
}

const RenderFav = ({ vet, product }: Props) => {
    const [deleteFavVet] = useDeleteFavVeterinarieMutation();
    const [deleteFavProduct] = useDeleteFavProductMutation();

    const [alertShow, setAlertShow] = useState(false);
    const [modeType, setModeType] = useState('');

    const handleCancel = () => {
        setAlertShow(false);
    };

    const deleteFav = () => {
        if (modeType === 'vet') {
            deleteFavVet(vet?.id);
        }
        if (modeType === 'product') {
            deleteFavProduct(product?.id);
        }
    };

    // Actualizar cuando se borra algun favorito.
    // Redireccion cuando apretas ir a la tienda/producto

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
                                setAlertShow(true), setModeType('vet');
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
                            // onPress={{}}
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
                <View
                    // onPress={}
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
                                setAlertShow(true), setModeType('product');
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
                            // onPress={{}}
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
                </View>
            )}
            {alertShow && (
                <Alerts
                    title="Eliminar favorito"
                    cancelText="Cancelar accion"
                    confirmText="Confirmar accion"
                    message="Se eliminara de favoritos"
                    alertShow={alertShow}
                    onCancel={handleCancel}
                    action={deleteFav}
                />
            )}
        </>
    );
};

export default RenderFav;
