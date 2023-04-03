import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Home } from '../screens/Home';
import { AuthStack } from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../reduxApp/services/auth/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCredentials } from '../reduxFeature/auth/authSlice';
import { ActivityIndicator } from 'react-native';

export interface AuthSlice {
    authSlice: {
        token: string;
        user: User;
    };
}

const Stack = createStackNavigator();

const LoggedStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const NoLoggedStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
    );
};

const Router = () => {
    const dispatch = useDispatch();
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const fetchCurrentUser = async () => {
        const currentUser = await AsyncStorage.getItem('token');
        if (currentUser) {
            dispatch(setCredentials({ token: currentUser }));
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, [dispatch]);

    if (infoUser?.token === null) {
        return <ActivityIndicator />;
    }

    return (
        <NavigationContainer>
            {infoUser?.token ? <LoggedStack /> : <NoLoggedStack />}
        </NavigationContainer>
    );
};

export default Router;
