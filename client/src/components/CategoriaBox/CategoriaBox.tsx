import React from 'react';
import {
    CategoriaContainer,
    CategoriaTexto,
    Imagen,
    ShadowCategoria,
} from './categoria.styled';
import { ImageSourcePropType, ViewProps } from 'react-native';
export interface CategoriaBoxProps {
    text: string;
    img: ImageSourcePropType;
    color: string;
}

const CategoriaBox: React.FC<CategoriaBoxProps> = ({ text, img, color }) => {
    return (
        <ShadowCategoria
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
