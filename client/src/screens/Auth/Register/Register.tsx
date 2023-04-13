import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary';
import CountryPicker, {
    Country,
    CountryCode,
} from 'react-native-country-picker-modal';
import { ActivityIndicator, Text } from 'react-native';
import { useRegisterUserMutation } from '../../../reduxApp/services/auth/auth';
import {
    Container,
    CountryPick,
    CountryView,
    Img,
    Input,
    Label,
    LabelError,
    Spinner,
    ViewForm,
} from './register.styled';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { colors } from '../../../constants';

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
    const [register, { isLoading }] = useRegisterUserMutation();
    const [countryCode, setCountryCode] = useState<CountryCode>('AR');
    const [country, setCountry] = useState<Country>({
        callingCode: ['54'],
        cca2: 'AR',
        currency: ['ARS'],
        flag: 'flag-ar',
        name: 'Argentina',
        region: 'Americas',
        subregion: 'South America',
    });
    const withCountryNameButton = true;

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors, isDirty, isValid },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
        },
        mode: 'onTouched',
    });

    const onSubmit = async (data: DataRegister) => {
        const countryName = country?.name.toString();
        console.log(data, countryName);
        const { firstName, lastName, password, email } = data;
        const resp: any = await register({
            firstName,
            lastName,
            password,
            email,
            country: countryName,
        });
        console.log(resp);
        if (!resp.error) {
            Toast.show({
                type: 'success',
                text1: 'Cuenta creada con éxito, ya puedes loguearte',
            });
            setTimeout(() => {
                navigation.navigate('login');
            }, 2000);
        }
        if (resp.error?.data.message === 'Email Already Exists') {
            Toast.show({
                type: 'error',
                text1: 'Ya existe una cuenta con este Email!',
            });
        }
    };

    return (
        <Container>
            <ViewForm>
                <CountryView>
                    <Text> Elige tu país: </Text>
                    <CountryPick>
                        <CountryPicker
                            {...{
                                countryCode,
                                onSelect,
                                withCountryNameButton,
                            }}
                        />
                    </CountryPick>
                </CountryView>
                <Label>Nombre</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={errors.firstName?.type === 'required'}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }}
                />
                {errors.firstName?.type === 'required' && (
                    <LabelError>Nombre requerido</LabelError>
                )}
                <Label>Apellido</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={errors.lastName?.type === 'required'}
                        />
                    )}
                    name="lastName"
                    rules={{ required: true }}
                />
                {errors.lastName?.type === 'required' && (
                    <LabelError>Apellido requerido</LabelError>
                )}
                <Label>Email</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="email-address"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={
                                errors.email?.type === 'required' ||
                                errors.email?.type === 'pattern'
                            }
                        />
                    )}
                    name="email"
                    rules={{
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    }}
                />
                {errors.email?.type === 'required' && (
                    <LabelError>Email requerido</LabelError>
                )}
                {errors.email?.type === 'pattern' && (
                    <LabelError>No es un email válido</LabelError>
                )}
                <Label>Contraseña</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={
                                errors.password?.type === 'required' ||
                                errors.password?.type === 'minLength'
                            }
                        />
                    )}
                    name="password"
                    rules={{ required: true, minLength: 8 }}
                />
                {errors.password?.type === 'required' && (
                    <LabelError>Contraseña requerida</LabelError>
                )}
                {errors.password?.type === 'minLength' && (
                    <LabelError>Debe tener al menos 8 caracteres</LabelError>
                )}
                <Label>Repetir Contraseña</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={
                                errors.password2?.type === 'required' ||
                                errors.password2?.type === 'validate'
                            }
                        />
                    )}
                    name="password2"
                    rules={{
                        required: true,
                        validate: (val: string) => watch('password') === val,
                    }}
                />
                {errors.password2?.type === 'required' && (
                    <LabelError>Contraseña requerida</LabelError>
                )}
                {errors.password2?.type === 'validate' && (
                    <LabelError>Las contraseñas no son iguales</LabelError>
                )}

                {isLoading ? (
                    <Spinner color={colors.primary} />
                ) : (
                    <ButtonPrimary
                        onPress={handleSubmit(onSubmit)}
                        title="Registrarse"
                        disabled={!isDirty || !isValid}
                    />
                )}
                <Img
                    source={require('../../../../assets/auth/registerImg.png')}
                />
            </ViewForm>
            <Toast />
        </Container>
    );
};

export default Register;
