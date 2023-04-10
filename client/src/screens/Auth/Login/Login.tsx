import React, { useEffect, useState } from 'react';
import {
    ViewForm,
    Form,
    Label,
    Input,
    Button,
    ButtonText,
    TextLogo,
    ViewLogo,
    ViewButton,
    TextSesion,
    ViewIcons,
} from './login.styled';
import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import SvgLogo from './SvgLogo';
import { useLoginUserMutation } from '../../../reduxApp/services/auth/auth';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../reduxFeature/auth/authSlice';
import { alertToast } from '../../../utils/alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonPrimary, ButtonSecondaryEmpty } from '../../../components';
import Toast from 'react-native-toast-message';

interface FormValues {
    email: string;
    password: string;
    onSubmit: (data: FormValues) => void;
}

interface LoginProps {
    navigation: any;
}

const schema = yup
    .object({
        email: yup
            .string()
            .email('Ingresa un correo válido')
            .required('Ingresa tu correo'),
        password: yup
            .string()
            .min(6, 'La contraseña debe ser de al menos 6 caracteres')
            .required('Ingresa tu contraseña'),
    })
    .required();

const Login = ({ navigation }: LoginProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const [loginUser, { isLoading }] = useLoginUserMutation();

    const onSubmit = async (values: FormValues) => {
        try {
            const response = await loginUser(values);
            if ('data' in response && response?.data?.results?.token) {
                const { data } = response;
                console.log(response);
                await AsyncStorage.setItem(
                    'token',
                    JSON.stringify(data.results)
                );
                dispatch(setCredentials(data?.results));
                alertToast(
                    'success',
                    'Sesion iniciada',
                    'Se inicio sesion correctamente!'
                );
            }
            if ('error' in response) {
                const { error } = response;
                if (error) {
                    if ('status' in error && error.status === 404) {
                        alertToast('error', 'Usuario no encontrado');
                    }
                    if ('status' in error && error.status === 403) {
                        alertToast('error', 'Error en el usuario o contraseña');
                    }
                    if ('status' in error && error.status === 400) {
                        alertToast('error', 'Error en el servidor');
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
        reset();
    };

    return (
        <ViewForm>
            <ViewLogo>
                <TextLogo>PetDidos Ya</TextLogo>
                <SvgLogo />
            </ViewLogo>
            <Form>
                <Label>Email</Label>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email ? true : false}
                        />
                    )}
                />
                {errors.email && <Text>{errors.email.message}</Text>}
                <Label>Contraseña</Label>

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Input
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={!showPassword}
                                style={{ flex: 1 }}
                                error={errors.password ? true : false}
                            />
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                    top: 10,
                                }}
                                onPress={() => setShowPassword(!showPassword)}
                                size={20}
                            />
                        </View>
                    )}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        top: 137,
                        left: 300,
                    }}
                ></TouchableOpacity>
                {errors.password && <Text>{errors.password?.message}</Text>}

                {isLoading && <ActivityIndicator size={24} />}
                <Text style={{ marginVertical: 20 }}>
                    ¿Olvidaste tu contraseña?
                </Text>
                <ViewButton>
                    <ButtonPrimary
                        onPress={handleSubmit(onSubmit)}
                        title="Continuar"
                        disabled={false}
                    />

                    <ButtonSecondaryEmpty
                        title="Registrarse"
                        onPress={() => navigation.navigate('register')}
                    />
                </ViewButton>
            </Form>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                    style={{ flex: 1, height: 1, backgroundColor: 'black' }}
                />
                <Text style={{ marginHorizontal: 10 }}>
                    O inicia sesión con
                </Text>
                <View
                    style={{ flex: 1, height: 1, backgroundColor: 'black' }}
                />
            </View>
            <ViewIcons>
                <Image
                    style={{ width: 34, height: 34 }}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/8c15/eb70/078b92b2a60aed8963175fe4263d7ac3?Expires=1681084800&Signature=PdEuMmzxuiNto6lUFfxi3wDb878sdlb1PJe8y~ENyvWgxEwRvX8ne3M7z~6Kf97yDqLcyRYOWLTirQoh8TN22jGMhrM7wR1VbpZTzl0m-s5vYhb8wtIAM3DJNJUkSzBUoOyyCusAYUh7fP6eeAGXfnHyhYOinm~I9w7WUaqZve3V4DK1eeKyz1SZTwyhJD0bSDNG27MRQ4LH6el9jGAmO-7BsEET2RiWtn15EBa6HfxJhIfhZgwurfxyhYyXUTIwwLEMJTsDjwRhDhOdDo39QQ8CeSMaf8wej06ArFAizFDkzltqD3mvYkviTeaYiyGVTqPt9riHJgHmvTnD-JRo5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    }}
                />
                <Image
                    style={{ width: 34, height: 34 }}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/4f18/1f16/957b2ad99699d08d7d65fd175759344c?Expires=1681084800&Signature=fZlzV5i3~STovqGLqbkt1DoBrgjWUp4S4OvMLakrgCFsDrcukYM0JrcCGcgGpZvYYlisgOw8UnkJ9CBit-f-VW7QPK~RnYYe4KsP9qm-Itx2b9dWZoltjIp3lCrinTkQWoUvNNsSOZ9LHUxqESVS8rY05OKqwAaC7ClarexiStiggurIs87CUJw5eNLSnHeyvgpUuxC5y9OFzP1D0UZRXu~02C0AIQhm7sO9zlPjOspURslhbW-lUf--bYwqO2y8g-Lbyty2sTxtjjwElILrMRgMnc6R9kdrlIROpQ53qxgu1CQQzNL~XAgJETUftOteBpkfwcnkibSNRpDC4pJMPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                    }}
                />
            </ViewIcons>
            <Toast />
        </ViewForm>
    );
};

export default Login;
