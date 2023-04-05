import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../constants';
import { Input, InputBuscadorWrapper, ShadowBox } from './inputBuscador.styled';

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

                <FontAwesome name="search" size={24} color="black" />

                <FontAwesome5 name="sliders-h" size={24} color="black" />
            </InputBuscadorWrapper>
        </ShadowBox>
    );
};

export default InputBuscador;
