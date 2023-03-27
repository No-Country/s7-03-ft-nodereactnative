import React from 'react';
import { Text, View } from 'react-native';

const AuthStack = () => {
    let test: string = 'Estas en la autenticacion de usuario';
    console.log(test);
    return (
        <View>
            <Text>Esta es la autenticacion</Text>
        </View>
    );
};

export default AuthStack;
