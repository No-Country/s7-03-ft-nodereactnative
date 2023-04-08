import styled from 'styled-components/native';
import { colors } from '../../constants';

export const CuidadorTabContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #fff;
    align-items: center;
    height: 88px;
`;

export const ContainerFotoCuidador = styled.View`
    height: 70px;
    aspect-ratio: 1/1;
    margin-right: 15px;
`;

export const FotoCuidador = styled.Image`
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: #fff;
    border-radius: 100px;
`;

export const DataCuidadorContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0px;
    flex: 1;
`;

export const MainDataCuidador = styled.View``;

export const CuidadorName = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const SloganCuidador = styled.Text``;

export const ContactoCuidadorContainer = styled.View`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    left: -4px;
`;

export const WhastappLogo = styled.Image`
    width: 30px;
    height: 30px;
    object-fit: contain;
`;

export const BotonVerPerfil = styled.Text`
    background-color: ${colors.primary};
    color: #fff;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 9px;
`;

export const SecondaryDataCuidador = styled.View``;

export const CuidadorRatingWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
`;
