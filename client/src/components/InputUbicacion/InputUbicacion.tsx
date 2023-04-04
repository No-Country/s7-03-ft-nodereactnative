import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    FakaPlaceholderText,
    FakePlaceholderContainer,
    FakePlaceholderIcon,
    Input,
    InputUbicacionWrapper,
    ShadowBox,
} from './InputUbicacion.styled';
import { colors } from '../../constants';
import { useState } from 'react';

export interface InputUbicacionProps {}

const InputUbicacion: React.FC<InputUbicacionProps> = () => {
    const [fakePlaceholderShow, setFakePlaceholderShow] = useState(true);
    const [ubicacion, setUbicacion] = useState('');
    const handleOnChange = (e: string) => {
        setUbicacion(e);
        () => setFakePlaceholderShow(false);
    };
    return (
        <ShadowBox
            style={{
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }}
        >
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
                <Input
                    placeholderTextColor="#000"
                    cursorColor={colors.primaryLight}
                    onChangeText={(e) => handleOnChange(e)}
                    onBlur={() => setFakePlaceholderShow(true)}
                />
            </InputUbicacionWrapper>
        </ShadowBox>
    );
};

export default InputUbicacion;
