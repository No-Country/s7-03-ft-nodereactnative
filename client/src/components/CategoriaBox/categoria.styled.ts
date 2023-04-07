import styled from 'styled-components/native';
import { colors } from '../../constants';
import { ViewProps, TouchableOpacityProps } from 'react-native';

interface MainContainerProps extends TouchableOpacityProps {
    color: string;
}

export const ShadowCategoria = styled.TouchableOpacity<MainContainerProps>`
    background-color: #fff;
    margin: 10px;
    margin-right: 5px;
    border-radius: 10px;
    background-color: ${(props) => props.color};
    height: 90px;
    width: 90px;
`;

export const CategoriaContainer = styled.View`
    border-radius: 10px;
    color: ${colors.primary};
    font-size: 20px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CategoriaTexto = styled.Text`
    padding: 0;
`;

export const Imagen = styled.Image`
    height: 75%;
    width: 75%;
    object-fit: contain;
`;
