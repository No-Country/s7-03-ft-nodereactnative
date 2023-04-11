import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Veterinaries } from '../../components';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import { PetShopContainer } from './PetShop.styled';
import { useEffect } from 'react';
import { SetVeterinaries } from '../../reduxFeature/veterinaries/veterinariesSlice';
import { useDispatch } from 'react-redux';
import AddNewVeterinarie from './AddNewVeterinarie/AddNewVeterinarie';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants';

const PetShop = ({ navigation }: any) => {
    const { data, isLoading, isSuccess } = useGetVeterinariesQuery('');

    const dispatch = useDispatch();

    // Falta actulizar que se renderice cuando se agrega una nueva tienda.

    useEffect(() => {
        if (data && isSuccess) {
            dispatch(SetVeterinaries(data.results));
        }
    }, [data, isSuccess, dispatch]);

    return (
        <PetShopContainer>
            {isLoading && <ActivityIndicator size={30} color={'green'} />}
            <Veterinaries />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons
                    color={colors.primary}
                    size={44}
                    name="add-circle-outline"
                    onPress={() => navigation.navigate('NewVeterinarie')}
                />
            </View>
        </PetShopContainer>
    );
};

export default PetShop;
