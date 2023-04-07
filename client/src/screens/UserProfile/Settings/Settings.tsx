import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ViewContainer, ViewMenu } from './Settings.styled';
import { AuthSlice } from '../../../router/Router';

const Settings = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    return (
        <ViewMenu>
            <Text>Perfil de usuario</Text>
            <ViewContainer>
                <Text>{infoUser?.user?.firstName}</Text>
                <Text>{infoUser?.user?.phone}</Text>
                <Text>{infoUser?.user?.country}</Text>
                <Text>{infoUser?.user?.email}</Text>
                <Text>{infoUser?.user?.codePhone}</Text>
            </ViewContainer>
        </ViewMenu>
    );
};

export default Settings;
