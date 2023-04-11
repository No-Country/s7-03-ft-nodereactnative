import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import RenderItem from './RenderItem';

const Veterinaries = () => {
    const infoVeterinaries = useSelector((state) => state.veterinariesSlice);

    return (
        <FlatList
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
            data={infoVeterinaries?.veterinaries?.veterinaries}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default Veterinaries;
