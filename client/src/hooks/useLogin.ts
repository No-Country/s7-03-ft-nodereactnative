import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginUserMutation } from '../reduxApp/services/auth/auth';
import { alertToast } from '../utils/alerts';
import { setCredentials } from '../reduxFeature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = yup
    .object({
        email: yup
            .string()
            .email('Ingresa un correo válido')
            .required('Ingresa tu correo'),
        password: yup
            .string()
            .min(6, 'La contraseña debe ser de al menos 6 caracteres')
            .required('Ingresa tu contraseña'),
    })
    .required();

interface FormValues {
    email: string;
    password: string;
    onSubmit: (data: FormValues) => void;
}

const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const [loginUser, { isLoading }] = useLoginUserMutation();

    const onSubmit = async (values: FormValues) => {
        try {
            const response = await loginUser(values);
            if ('data' in response && response?.data?.results?.token) {
                const { data } = response;
                alertToast(
                    'success',
                    'Sesion iniciada',
                    'Se inicio sesion correctamente!'
                );
                setTimeout(() => {
                    dispatch(setCredentials(data?.results));
                }, 2000);
                await AsyncStorage.setItem(
                    'token',
                    JSON.stringify(data.results)
                );
            }
            if ('error' in response) {
                const { error } = response;
                if (error) {
                    if ('status' in error && error.status === 404) {
                        alertToast('error', 'Usuario no encontrado');
                    }
                    if ('status' in error && error.status === 403) {
                        alertToast('error', 'La contraseña es incorrecta');
                    }
                    if ('status' in error && error.status === 400) {
                        alertToast('error', 'Error en el servidor');
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
        reset();
    };

    return {
        control,
        errors,
        showPassword,
        setShowPassword,
        isLoading,
        handleSubmit,
        onSubmit,
    };
};

export default useLogin;
