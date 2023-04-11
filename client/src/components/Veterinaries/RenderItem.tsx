import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useGetVeterinariesIdQuery } from '../../reduxApp/services/veterinaries/vetServices';
import { useState } from 'react';

const RenderItem = ({ item }: any) => {
    // const [idRequest, setIdRequest] = useState('');

    // const { data } = useGetVeterinariesIdQuery(idRequest);

    // console.log('data de la peticion', data);

    return (
        <View>
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
        </View>
    );
};

export default RenderItem;
