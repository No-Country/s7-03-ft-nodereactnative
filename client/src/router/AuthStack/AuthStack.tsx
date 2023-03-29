import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Register } from '../../screens/Auth/Register';
import { Login } from '../../screens/Auth/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
    let test: string = 'Estas en la autenticacion de usuario';
    console.log(test);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
