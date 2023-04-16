import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCreateVeterinarieMutation } from '../../../reduxApp/services/veterinaries/vetServices';
import { Input, Label } from '../../UserProfile/Settings/Settings.styled';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Controller, useForm } from 'react-hook-form';
import { ContenedorInputDireccion, MainWrapperFormVet } from './addNewVeterinarie.styled';
import { FlatList } from 'react-native';
import { API_KEY_GOOGLEPLACESAUTOCOMPLETE } from '@env';
import { CommonInput } from '../../../components';

const AddNewVeterinarie = () => {
    const [newVet] = useCreateVeterinarieMutation();

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors, isDirty, isValid },
    } = useForm({});

    const onSubmit = async (data: any) => {
        const objData = {
            ...data,
            latitude: data?.latitude ?? 0,
            longitude: data?.longitude ?? 0,
            country: 'ARG',
        };
        console.log('esto es objdata', objData);
        // const response = await newVet(objData);
        // console.log(response);
    };

    return (
        <FlatList
            data={[{ key: 'dummy' }]}
            renderItem={() => (
                <MainWrapperFormVet>
                    <CommonInput control={control} name='name' label='Nombre de la clínica veterinaria' />
                    <CommonInput control={control} name='description' label='Descripción' />
                    <CommonInput control={control} name='phone' label='Teléfono' />
                    <CommonInput control={control} name='address' label='Dirección' />
                    <Controller
                        control={control}
                        name="address"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ContenedorInputDireccion>
                                <View>
                                    <GooglePlacesAutocomplete
                                        placeholder="Search"
                                        onPress={(data, details = null) => {
                                            // 'details' is provided when fetchDetails = true
                                            console.log(data, details);
                                        }}
                                        query={{
                                            key: {API_KEY_GOOGLEPLACESAUTOCOMPLETE},
                                            language: 'en',
                                        }}
                                    />
                                </View>
                            </ContenedorInputDireccion>
                        )}
                    />
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                        <Text>Crear tienda</Text>
                    </TouchableOpacity>
                </MainWrapperFormVet>
            )}
        />
    );
};

export default AddNewVeterinarie;
