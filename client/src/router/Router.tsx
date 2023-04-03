import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens/Home';
import { AuthStack } from './AuthStack';
import { TabNavigator } from './TabNavigator';

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
    let isLogged: boolean = false;
    console.log(isLogged);
    return (
        <NavigationContainer>
            {isLogged ? <LoggedStack /> : <NoLoggedStack />}
        </NavigationContainer>
    );
};

export default Router;
