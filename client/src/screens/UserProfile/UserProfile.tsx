import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../reduxApp/services/users/users';
import { AuthSlice } from '../../router/Router';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import { logout } from '../../reduxFeature/auth/authSlice';
import AwesomeAlert from 'react-native-awesome-alerts';
import Alerts from '../../components/Alerts/Alerts';

interface Props {
    navigation: any;
}

const UserProfile = ({ navigation }: Props) => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    const [alertShow, setAlertShow] = useState(false);
    const { data, isFetching } = useGetUserQuery(infoUser.user.id);

    const handleCancel = () => {
        setAlertShow(false);
    };

    return (
        <View style={{ marginTop: 50 }}>
            <Text>User profile</Text>
            <ButtonPrimary
                title="Cerrar sesion"
                onPress={() => setAlertShow(true)}
            />
            {alertShow && (
                <Alerts
                    title="Probando perfil"
                    cancelText="Cancelar"
                    confirmText="Confirmar"
                    message="Probando"
                    alertShow={alertShow}
                    onCancel={handleCancel}
                />
            )}
        </View>
    );
};

export default UserProfile;
