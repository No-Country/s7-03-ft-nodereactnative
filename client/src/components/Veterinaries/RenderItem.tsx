import React from 'react';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ContainerVeterinaries } from './Veterinaries.styled';

const RenderItem = ({ item }: any) => {
    return (
        <ContainerVeterinaries
            style={{
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                marginBottom: 15,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}
            >
                <View>
                    <Image
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 10,
                        }}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIdD74Dj1FwX3sOCRuwFgNlXNW64dknk8VTifSvZC4gsYJGEp7FKRiSO1NYp9BfVvToU&usqp=CAU',
                        }}
                    />
                </View>
                <View>
                    <Text>{item?.name}</Text>
                    <Text>{item?.description}</Text>
                    <Text>{item?.address}</Text>
                    <Text>Horarios</Text>
                    <Entypo name="heart-outlined" size={24} color="black" />
                </View>
                <View
                    style={{
                        backgroundColor: 'green',
                        height: '100%',
                        width: '100%',
                        alignItems: 'baseline',
                    }}
                >
                    <Entypo name="heart-outlined" size={24} color="black" />
                    <Entypo name="heart-outlined" size={24} color="black" />
                </View>
            </View>
        </ContainerVeterinaries>
    );
};

export default RenderItem;
