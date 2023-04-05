import styled from 'styled-components/native';
import { colors } from '../../constants';

export const ContainerHome = styled.ScrollView`
    background-color: #fff;
    flex: 1;
`;

export const ContainerMenuyUbicacion = styled.View`
    width: 80%;
    margin: 0 auto;
`;

export const SaludoUser = styled.Text`
    text-align: center;
    color: ${colors.primary};
    font-size: 40px;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 25px;
`;

export const ContainerCategorias = styled.View`
    margin-top: 35px;
`;
export const ContainerTitleOfertas = styled.View`
    padding-left: 23px;
    padding-bottom: 20px;
`;

export const Title = styled.Text`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: 500;
`;

export const FilaCategorias = styled.ScrollView`
    padding: 2px;
    background-color: ${colors.backgroundLightViolet};
    display: flex;
    flex-direction: row;
`;

export const ContainerOfertas = styled.View`
    padding: 23px;
`;

export const ImageOferta = styled.Image`
    width: 100%;
    object-fit: contain;
`;

export const ListaStore = styled.View``;
