import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary';
import { ButtonSecondaryEmpty } from '../../../components/buttons/ButtonSecondaryEmpty';
import { TextLogo, ViewForm, ViewLogo } from '../Login/login.styled';
import SvgLogo from '../Login/SvgLogo';
import styled from 'styled-components/native';

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
    height: 56px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
    margin-bottom: 15px;
`;

interface DataRegister {
    email: string;
    password: string;
    password2: string;
}

interface Props {
    navigation: any;
}

const Register = ({ navigation }: Props) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            password2: '',
        },
    });

    const onSubmit = (data: DataRegister) => {
        console.log(data);
    };

    return (
        <ViewForm>
            <ViewLogo>
                <TextLogo>PetDidos Ya</TextLogo>
                <SvgLogo />
            </ViewLogo>
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
                rules={{ required: true }}
            />

            <ButtonPrimary
                onPress={handleSubmit(onSubmit)}
                title="Registrarse"
            />

            <ButtonSecondaryEmpty
                onPress={() => navigation.navigate('login')}
                title="Ir al Login"
            />
        </ViewForm>
    );
};

export default Register;
