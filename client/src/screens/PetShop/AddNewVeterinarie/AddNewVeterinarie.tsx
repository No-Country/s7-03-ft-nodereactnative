import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCreateVeterinarieMutation } from '../../../reduxApp/services/veterinaries/vetServices';
import { Input, Label } from '../../UserProfile/Settings/Settings.styled';
import { Controller, useForm } from 'react-hook-form';

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
        const response = await newVet(objData);
        console.log(response);
    };

    return (
        <View>
            <Text>Add new veterinarie</Text>
            <Label>name</Label>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Label>description</Label>
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Label>address</Label>
            <Controller
                control={control}
                name="address"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Label>phone</Label>
            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text>Crear tienda</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddNewVeterinarie;
