import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    FakaPlaceholderText,
    FakePlaceholderContainer,
    FakePlaceholderIcon,
    GoogleInputContainer,
    InputUbicacionWrapper,
} from './InputUbicacion.styled';
import { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

export interface InputUbicacionProps {}

const InputUbicacion: React.FC<InputUbicacionProps> = () => {
    const [fakePlaceholderShow, setFakePlaceholderShow] = useState(true);
    const [ubicacion, setUbicacion] = useState('');
    const handleOnChange = (e: string) => {
        setUbicacion(e);
        () => setFakePlaceholderShow(false);
    };
    return (
        <InputUbicacionWrapper>
            {/* <FakePlaceholderContainer>
                <FakePlaceholderIcon>
                    <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={30}
                        color="black"
                    />
                </FakePlaceholderIcon>
                <FakaPlaceholderText>Ubicación</FakaPlaceholderText>
            </FakePlaceholderContainer> */}
            <GoogleInputContainer>
                <GooglePlacesAutocomplete
                    placeholder=""
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: process.env.API_APP_GOOGLEPLACES_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                            borderRadius: 100,
                            margin: 5,
                            paddingLeft: 10,
                            paddingTop: 5,
                            backgroundColor: '#fff',
                        },
                        textInput: {
                            borderRadius: 100,
                        },
                    }}
                />
            </GoogleInputContainer>
        </InputUbicacionWrapper>
    );
};

export default InputUbicacion;
