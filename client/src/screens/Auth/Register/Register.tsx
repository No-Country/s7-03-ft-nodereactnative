import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary';
import { ViewForm } from '../Login/login.styled';
import styled from 'styled-components/native';
import { useRegisterMutation } from '../../../reduxApp/api-slices/auth-api-slice';

const Container = styled.ScrollView`
    background-color: white;
`;

const Label = styled.Text`
    color: black;
    margin: 15px auto -8px 30px;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;

const Input = styled.TextInput`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
`;

const Img = styled.Image`
    width: 60%;
    object-fit: contain;
`;

interface DataRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2: string;
}

interface Props {
    navigation: any;
}

const Register = ({ navigation }: Props) => {
    const [register, { isLoading }] = useRegisterMutation();

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
        },
    });

    const onSubmit = (data: DataRegister) => {
        console.log(data);
        const { firstName, lastName, password, email } = data;
        const resp = register({ firstName, lastName, password, email, country: 'arg', codePhone:'54', phone: '123' });
        console.log(resp);
        console.log(isLoading);
        
    };

    return (
        <Container>
            <ViewForm>
                <Img
                    source={require('../../../../assets/auth/registerImg.png')}
                />
                <Label>Nombre</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }}
                />
                <Label>Apellido</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name="lastName"
                    rules={{ required: true }}
                />
                <Label>Email</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="email-address"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true }}
                />
                <Label>Contraseña</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                />
                <Label>Repetir Contraseña</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password2"
                    rules={{
                        required: true,
                        validate: (val: string) => watch('password') === val,
                    }}
                />

                <ButtonPrimary
                    onPress={handleSubmit(onSubmit)}
                    title="Registrarse"
                />
            </ViewForm>
        </Container>
    );
};

export default Register;
