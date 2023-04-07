import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input, Label, ViewContainer, ViewMenu } from './Settings.styled';
import { AuthSlice } from '../../../router/Router';
import { Controller, useForm } from 'react-hook-form';
import { ButtonPrimary } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Settings = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const { user } = infoUser;

    const preloadedValues = {
        firstName: user.firstName ? user.firstName : 'No hay informacion',
        lastName: user.lastName ? user.lastName : 'No hay informacion',
        phone:
            user.codePhone + user.phone
                ? user.codePhone + user.phone
                : 'No hay informacion',
        country: user.country ? user.country : 'No hay informacion',
        email: user.email ? user.email : 'No hay informacion',
    };

    console.log(preloadedValues);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: preloadedValues });

    return (
        <ViewMenu>
            <KeyboardAwareScrollView
                style={{
                    margin: 0,
                    padding: 0,
                    width: '100%',
                }}
            >
                <Text>Perfil de usuario</Text>
                <ViewContainer>
                    <Label>Nombre</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="firstName"
                        rules={{ required: true }}
                    />
                    <Label>Apellido</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="lastName"
                        rules={{ required: true }}
                    />
                    <Label>Celular</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="phone"
                        rules={{ required: true }}
                    />
                    <Label>Pais</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="country"
                        rules={{ required: true }}
                    />
                    <Label>Email</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                </ViewContainer>
                <ButtonPrimary title="Editar Campos" />
            </KeyboardAwareScrollView>
        </ViewMenu>
    );
};

export default Settings;
