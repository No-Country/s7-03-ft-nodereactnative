import React, { useState } from 'react';
import { View, Form, Label, Input, Button, ButtonText } from './login.styled';
import { Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';

type FormValues = {
    email: string;
    password: string;
    onSubmit: (data: FormValues) => void;
};

interface LoginProps {
    navigation: any;
}

const Login = ({ navigation }: LoginProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
        reset();
    };

    return (
        <View>
            <Form>
                <Text>Login</Text>
                <Label>Email</Label>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your email"
                        />
                    )}
                />

                <Label>Password</Label>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                        />
                    )}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        top: 132,
                        left: 300,
                    }}
                >
                    <Icon size={20} name={showPassword ? 'eye-off' : 'eye'} />
                </TouchableOpacity>

                <Button onPress={handleSubmit(onSubmit)}>
                    <ButtonText>Submit</ButtonText>
                </Button>
                <Button primary onPress={() => navigation.navigate('register')}>
                    <ButtonText>Ir a registro</ButtonText>
                </Button>
            </Form>
        </View>
    );
};

export default Login;
