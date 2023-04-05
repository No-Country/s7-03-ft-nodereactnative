import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../../reduxApp/services/users/users';
import { AuthSlice } from '../../router/Router';
import { Button } from '../Auth/Login/login.styled';

const UserProfile: React.FC = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    const { data, isFetching } = useGetUserQuery(infoUser.user.id);
    return (
        <View style={{ marginTop: 50 }}>
            <Text>User profile</Text>
            <Button onPress={() => AsyncStorage.removeItem('token')} />
        </View>
    );
};

export default UserProfile;
