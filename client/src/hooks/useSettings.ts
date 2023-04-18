import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    useDeleteUserMutation,
    useUpdateUserMutation,
} from '../reduxApp/services/users/users';
import { setCredentials } from '../reduxFeature/auth/authSlice';
import { setDelete } from '../reduxFeature/user/userSlice';
import { AuthSlice } from '../router/Router';
import { alertToast } from '../utils/alerts';

interface DataUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: number | string;
    codePhone: string;
    country: string;
}

const useSettings = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
   
    const dispatch = useDispatch();

    const [mode, setMode] = useState('');
    const [alertShow, setAlertShow] = useState(false);
    const [dataEdit, setDataEdit] = useState({});

    const [editUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const { user } = infoUser;

    const preloadedValues = {
        firstName: user.firstName ?? 'No hay informacion',
        lastName: user.lastName ?? 'No hay informacion',
        codePhone: user.codePhone ?? 'No hay informacion',
        phone: user.phone ?? 'No hay informacion',
        country: user.country ?? 'No hay informacion',
        email: user.email ?? 'No hay informacion',
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
                }, 1000);
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const confirmDelete = async () => {
        try {
            deleteUser(infoUser.user.id);
            dispatch(setDelete());
            await AsyncStorage.removeItem('token');
        } catch (error) {
            console.warn(error);
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

    return {
        control,
        handleSubmit,
        onSubmit,
        errors,
        handleDelete,
        alertShow,
        mode,
        handleCancel,
        confirmEdit,
        confirmDelete,
    };
};

export default useSettings;
