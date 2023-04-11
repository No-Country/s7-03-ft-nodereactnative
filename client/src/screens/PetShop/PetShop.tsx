import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Veterinaries } from '../../components';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import { PetShopContainer } from './PetShop.styled';
import { useEffect } from 'react';
import { SetVeterinaries } from '../../reduxFeature/veterinaries/veterinariesSlice';
import { useDispatch } from 'react-redux';

const PetShop = () => {
    const { data, isLoading, isSuccess } = useGetVeterinariesQuery('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (data && isSuccess) {
            dispatch(SetVeterinaries(data.results));
        }
    }, [data, isSuccess, dispatch]);

    return (
        <PetShopContainer>
            {isLoading && <ActivityIndicator size={30} color={'green'} />}
            <Veterinaries />
        </PetShopContainer>
    );
};

export default PetShop;
