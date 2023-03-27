import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }: any) => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text>Ir a registro</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
