import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    FakaPlaceholderText,
    FakePlaceholderContainer,
    FakePlaceholderIcon,
    GoogleInputContainer,
    InputUbicacionWrapper,
    ShadowBox,
} from './InputUbicacion.styled';
import { colors } from '../../constants';
import { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export interface InputUbicacionProps {}

const InputUbicacion: React.FC<InputUbicacionProps> = () => {
    const [fakePlaceholderShow, setFakePlaceholderShow] = useState(true);
    const [ubicacion, setUbicacion] = useState('');
    const handleOnChange = (e: string) => {
        setUbicacion(e);
        () => setFakePlaceholderShow(false);
    };
    return (
        <ShadowBox>
            <InputUbicacionWrapper>
                {!ubicacion && fakePlaceholderShow ? (
                    <FakePlaceholderContainer>
                        <FakePlaceholderIcon>
                            <MaterialCommunityIcons
                                name="map-marker-outline"
                                size={30}
                                color="black"
                            />
                        </FakePlaceholderIcon>
                        <FakaPlaceholderText>Ubicación</FakaPlaceholderText>
                    </FakePlaceholderContainer>
                ) : null}
                <GoogleInputContainer horizontal={false}>
                    <GooglePlacesAutocomplete
                        placeholder=""
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'AIzaSyAIWVbZOxUNInO6ceDNWAc1V5yjqLeL6Cw',
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
        </ShadowBox>
    );
};

export default InputUbicacion;
