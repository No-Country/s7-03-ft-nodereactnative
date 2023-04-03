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
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import SvgLogo from './SvgLogo';
import { useLoginUserMutation } from '../../../reduxApp/services/auth';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../reduxFeature/auth/authSlice';
import { ResponseLogin } from '../../../reduxApp/services/types';

interface FormValues {
    email: string;
    password: string;
    onSubmit: (data: FormValues) => void;
}

interface LoginProps {
    navigation: any;
}

const Login = ({ navigation }: LoginProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const [loginUser, { isLoading, isError, status, error }] =
        useLoginUserMutation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await loginUser(data);
            dispatch(
                dispatch(
                    setCredentials(
                        (response as { data: ResponseLogin }).data?.results
                    )
                )
            );
            navigation.navigate('Home');
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
                            secureTextEntry={!showPassword}
                        />
                    )}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        top: 137,
                        left: 300,
                    }}
                >
                    <Icon size={20} name={showPassword ? 'eye-off' : 'eye'} />
                </TouchableOpacity>
                <ViewButton>
                    <Button onPress={handleSubmit(onSubmit)}>
                        <ButtonText primary>Continuar</ButtonText>
                    </Button>
                    <Button
                        primary
                        onPress={() => navigation.navigate('register')}
                    >
                        <ButtonText>Registrarse</ButtonText>
                    </Button>
                </ViewButton>
            </Form>
            <View style={{ width: '100%' }}>
                <TextSesion>
                    ------------------------- O inicia sesión con
                    ----------------------
                </TextSesion>
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
        </ViewForm>
    );
};

export default Login;
