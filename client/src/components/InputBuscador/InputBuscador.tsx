import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants';
import {
    ContenedorIcono,
    Input,
    InputBuscadorWrapper,
    ShadowBox,
} from './inputBuscador.styled';

export interface InputBuscadorProps {}

const InputBuscador: React.FC<InputBuscadorProps> = () => {
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
            <InputBuscadorWrapper>
                <Input
                    placeholder="¿Qué estas buscando?"
                    placeholderTextColor="#000"
                    cursorColor={colors.primaryLight}
                />
                <ContenedorIcono>
                    <FontAwesome name="search" size={24} color="black" />
                </ContenedorIcono>
            </InputBuscadorWrapper>
        </ShadowBox>
    );
};

export default InputBuscador;
