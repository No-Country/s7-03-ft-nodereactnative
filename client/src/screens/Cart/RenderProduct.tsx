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
import ModalProductOptions from './ModalProductOptions';

interface Product  {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    veterinaryId: string
    productCategoryId: string
    productCategory: {
      id: string
      name: string
    },
    productImage: IMG[]
  }
  interface IMG {
imageUrl:string
  }

  interface Props {
    product:Product
  }

const RenderProduct = ({product}:Props) => {
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
                source={{uri: product.productImage[0].imageUrl}}
                style={{
                    height: 100,
                    width: 100,
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
                    $ {product.price}
                </Text>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontWeight: '600' }}>
                       {product.name}
                    </Text>
                    {/* <Text>Cantidad: 2</Text> */}
                </View>
                {/* <TouchableOpacity
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
                            Guardar
                        </Text>
                        <Ionicons color={'black'} name="heart-outline" />
                    </View>
                </TouchableOpacity> */}
            </View>
            <View>
                <TouchableOpacity onPress={toggleModal}>
                    <Ionicons size={30} name="ellipsis-vertical" />
                </TouchableOpacity>
                <ModalProductOptions
                    isModalVisible={isModalVisible}
                    toggleModal={toggleModal}
                />
            </View>
        </View>
    );
};

export default RenderProduct;
