import { View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { Error, LabelGoogle } from './commonInput.styled';
import { API_KEY_GOOGLEPLACESAUTOCOMPLETE } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState } from 'react';
import { alpha2ToAlpha3 } from 'i18n-iso-countries';

export interface GooglePlacesInputProps {
    control: any;
    name: string;
    label: string;
    errors: any;
}

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = ({
    control,
    name,
    label,
    errors,
}) => {
    const [locationData, setLocationData] = useState({});

    return (
        <View>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: {
                        value: true,
                        message: 'Este campo es requerido.',
                    },
                    pattern: {
                        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s,'-]*$/,
                        message: 'Ingrese una dirección valida',
                    },
                }}
                render={({ field: { onChange } }) => (
                    <GooglePlacesAutocomplete
                        styles={{ 
                            textInput: {
                                backgroundColor: 'transparent',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#79747e',
                                marginTop: 30,
                                marginBottom: 5,

                            },
                        }}
                        placeholder="Ingrese dirección exacta"
                        onPress={(data, details = null) => {
                            const alpha2Code =
                                details?.address_components?.find((c) =>
                                    c?.types?.includes('country')
                                )?.short_name;

                            const alpha3Code = alpha2Code
                                ? alpha2ToAlpha3(alpha2Code)
                                : undefined;

                            const location = {
                                name: data.description,
                                latitude: details?.geometry.location.lat,
                                longitude: details?.geometry.location.lng,
                                country: alpha3Code,
                            };

                            setLocationData(location);
                            onChange(location);
                        }}
                        query={{
                            key: API_KEY_GOOGLEPLACESAUTOCOMPLETE,
                            language: 'es',
                        }}
                        fetchDetails={true}
                        listEmptyComponent={() => (
                            <View style={{ flex: 1 }}>
                                <Text>No se encontraron resultados.</Text>
                            </View>
                        )}
                    />
                )}
            />
            <LabelGoogle>{label}</LabelGoogle>

            {errors && <Error>{errors}</Error>}
        </View>
    );
};

export default GooglePlacesInput;
