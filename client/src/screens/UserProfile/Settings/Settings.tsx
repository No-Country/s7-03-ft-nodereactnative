import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Label, ViewContainer, ViewMenu } from './Settings.styled';
import { AuthSlice } from '../../../router/Router';
import { Controller, useForm } from 'react-hook-form';
import { ButtonPrimary } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    useDeleteUserMutation,
    useUpdateUserMutation,
} from '../../../reduxApp/services/users/users';
import { Data } from '../../../reduxApp/services/auth/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCredentials } from '../../../reduxFeature/auth/authSlice';
import { alertToast } from '../../../utils/alerts';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Alerts from '../../../components/Alerts/Alerts';
import { setDelete } from '../../../reduxFeature/user/userSlice';

interface DataUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: number | string;
    codePhone: string;
    country: string;
}

const Settings = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const dispatch = useDispatch();

    const [mode, setMode] = useState('');
    const [alertShow, setAlertShow] = useState(false);
    const [dataEdit, setDataEdit] = useState({});

    const [editUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const { user } = infoUser;

    const preloadedValues = {
        firstName: user.firstName ? user.firstName : 'No hay informacion',
        lastName: user.lastName ? user.lastName : 'No hay informacion',
        codePhone: user.codePhone ? user.codePhone : 'No hay informacion',
        phone: user.phone ? user.phone : 'No hay informacion',
        country: user.country ? user.country : 'No hay informacion',
        email: user.email ? user.email : 'No hay informacion',
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: preloadedValues });

    const confirmEdit = async () => {
        try {
            const response = await editUser({
                id: infoUser.user.id,
                data: dataEdit,
            });
            if ('data' in response && response?.data) {
                alertToast(
                    'success',
                    'Perfil actualizado',
                    'Se edito correctamente el perfil'
                );
                await AsyncStorage.setItem(
                    'token',
                    JSON.stringify(response.data)
                );
                setTimeout(() => {
                    dispatch(setCredentials(response.data));
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const confirmDelete = async () => {
        try {
            deleteUser(infoUser.user.id);
            dispatch(setDelete());
            await AsyncStorage.removeItem('token');
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = () => {
        setAlertShow(false);
    };

    const onSubmit = (data: DataUser) => {
        setMode('edit');
        setAlertShow(true);
        const objEdit = {
            firstName: data.firstName,
            lastName: data.lastName,
            codePhone: data.codePhone,
            phone: data.phone.toString(),
            country: data.country,
        };
        setDataEdit(objEdit);
    };

    const handleDelete = () => {
        setMode('delete');
        setAlertShow(true);
    };

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
                    <Label>Codigo de Pais(Celular)</Label>
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
                        name="codePhone"
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
                    {/* 
                    No se manda para editar
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
                        rules={{ required: false }}
                    /> */}
                </ViewContainer>
                <View style={{ marginTop: 40 }}>
                    <ButtonPrimary
                        onPress={handleSubmit(onSubmit)}
                        title="Editar Campos"
                    />
                    <ButtonPrimary
                        onPress={handleDelete}
                        title="Eliminar perfil"
                    />
                </View>
            </KeyboardAwareScrollView>
            <Toast />
            {alertShow && (
                <Alerts
                    title={
                        mode === 'edit'
                            ? 'Editar Perfil'
                            : mode === 'delete'
                            ? 'Eliminar Perfil'
                            : ''
                    }
                    cancelText="Cancelar"
                    confirmText="Confirmar accion"
                    message={
                        mode === 'edit'
                            ? 'Estas a punto de editar tu perfil'
                            : mode === 'delete'
                            ? 'Estas a punto de eliminar tu cuenta, esta accion es irreversible!'
                            : ''
                    }
                    alertShow={alertShow}
                    onCancel={handleCancel}
                    action={
                        mode === 'edit'
                            ? confirmEdit
                            : mode === 'delete'
                            ? confirmDelete
                            : () => {}
                    }
                />
            )}
        </ViewMenu>
    );
};

export default Settings;
