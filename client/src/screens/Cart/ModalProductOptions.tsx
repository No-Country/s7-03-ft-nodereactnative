import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PropsModal {
    isModalVisible: boolean;
    toggleModal: () => void;
}

const ModalProductOptions = ({ isModalVisible, toggleModal }: PropsModal) => {
    return (
        <Modal
            transparent
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'flex-end',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: '40%',
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
                            <Ionicons size={30} name="add-circle-outline" />
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
                            <Ionicons size={30} name="md-bookmark-outline" />
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
                            <Ionicons size={30} name="trash-bin-outline" />
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
            </View>
        </Modal>
    );
};

export default ModalProductOptions;
