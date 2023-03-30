import React from 'react';
import { Categoria, ShadowCategoria } from './categoria.styled';
export interface CategoriaBoxProps {
    text: string;
}

const CategoriaBox: React.FC<CategoriaBoxProps> = ({ text }) => {
    return (
        <ShadowCategoria
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
            <Categoria>{text}</Categoria>
        </ShadowCategoria>
    );
};

export default CategoriaBox;
