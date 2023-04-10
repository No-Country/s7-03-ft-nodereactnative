import React from 'react';
import {
    CategoriaContainer,
    CategoriaTexto,
    Imagen,
    ShadowCategoria,
} from './categoria.styled';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';

export interface CategoriaBoxProps {
    text: string;
    img: ImageSourcePropType;
    color: string;
    to: keyof RootStackParamList;
}

const CategoriaBox: React.FC<CategoriaBoxProps> = ({ text, img, color, to }) => {

    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, typeof to>>();

    return (
        <ShadowCategoria
            onPress={() => navigation.navigate(to)}
            color={color}
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 5,
            }}
        >
            <CategoriaContainer>
                <Imagen source={img} />
                <CategoriaTexto>{text}</CategoriaTexto>
            </CategoriaContainer>
        </ShadowCategoria>
    );
};

export default CategoriaBox;
