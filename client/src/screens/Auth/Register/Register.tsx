import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary';
import styled from 'styled-components/native';
import CountryPicker, {
    Country,
    CountryCode,
} from 'react-native-country-picker-modal';
import { Text } from 'react-native';
import { useRegisterUserMutation } from '../../../reduxApp/services/auth/auth';

const Container = styled.ScrollView`
    background-color: white;
`;

export const ViewForm = styled.View`
    
    background-color: white;
    justify-content: center;
    align-items: center;    
`;

const Label = styled.Text`
    color: black;
    margin: 15px auto -8px 30px;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;

const CountryView = styled.View`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`;

const CountryPick = styled.View`
    border-radius: 4px;
    border-width: 1px;
    padding: 3px;
`;

const Input = styled.TextInput`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
    margin-bottom: 5px;
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
    const [register, { isLoading }] = useRegisterUserMutation();
    const [countryCode, setCountryCode] = useState<CountryCode>('AR');
    const [country, setCountry] = useState<Country>({
        "callingCode": [
          "54",
        ],
        "cca2": "AR",
        "currency": [
          "ARS",
        ],
        "flag": "flag-ar",
        "name": "Argentina",
        "region": "Americas",
        "subregion": "South America",
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

    const onSubmit = async (data: DataRegister) => {
        const countryName = country?.name.toString()
        console.log(data, countryName);
        const { firstName, lastName, password, email } = data;
        const resp: any = await register({
            firstName,
            lastName,
            password,
            email,
            country: countryName
        });
        console.log(resp);
        if ( !(resp.error)) navigation.navigate('login')
        console.log(isLoading);
    };

    return (
        <Container>
            <ViewForm>
                {/* <Img
                    source={require('../../../../assets/auth/registerImg.png')}
                /> */}
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
                    disabled= {false}
                />
            <Img
                    source={require('../../../../assets/auth/registerImg.png')}
                />
            </ViewForm>
        </Container>
    );
};

export default Register;
