import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const RenderProduct = () => {
    const [openOptions, setOpenOptions] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <View
            style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                marginTop: 5,
                height: 120,
                backgroundColor: '#f8f8f8',
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
                <TouchableOpacity onPress={toggleModal}>
                    <Ionicons size={30} name="ellipsis-vertical" />
                </TouchableOpacity>
                <Modal
                    transparent
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            justifyContent: 'flex-end',
                        }}
                        onPress={toggleModal}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                width: '100%',
                                height: '50%',
                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        marginTop: 20,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginHorizontal: 35,
                                        marginBottom: 20,
                                    }}
                                >
                                    <Text
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: '500',
                                            fontSize: 18,
                                        }}
                                    >
                                        Opciones
                                    </Text>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <Ionicons size={30} name="close" />
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 5,
                                        marginHorizontal: 35,

                                        marginVertical: 15,
                                    }}
                                >
                                    <Ionicons
                                        size={30}
                                        name="add-circle-outline"
                                    />
                                    <Text>Editar cantidad</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginVertical: 5,
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 5,
                                        marginHorizontal: 35,

                                        marginVertical: 15,
                                    }}
                                >
                                    <Ionicons
                                        size={30}
                                        name="md-bookmark-outline"
                                    />
                                    <Text>Mover a favoritos</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginVertical: 5,
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 5,
                                        marginHorizontal: 35,
                                        marginVertical: 15,
                                    }}
                                >
                                    <Ionicons
                                        size={30}
                                        name="trash-bin-outline"
                                    />
                                    <Text>Eliminar del carrito</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>
    );
};

export default RenderProduct;
