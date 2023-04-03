import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens/Home';
import { AuthStack } from './AuthStack';
import { useSelector } from 'react-redux';
import { User } from '../reduxApp/services/auth/types';

interface AuthSlice {
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
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    return (
        <NavigationContainer>
            {infoUser.token ? <LoggedStack /> : <NoLoggedStack />}
        </NavigationContainer>
    );
};

export default Router;
