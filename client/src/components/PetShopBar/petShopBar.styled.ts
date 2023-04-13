import styled from 'styled-components/native';
import { colors } from '../../constants';

export const PetshopTabContainer = styled.View`
    padding: 10px 15px;
    border-radius: 5px;
    height: 88px;
    display: flex;
    flex-direction: row;
`;

export const LeftSideContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 9;
`;

export const ContainerFotoPetshop = styled.View`
    height: 70px;
    aspect-ratio: 1/1;
    margin-right: 15px;
`;

export const FotoPetshop = styled.Image`
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: #fff;
    border-radius: 100px;
`;

export const DataPetshopContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    font-size: 0px;
    /* flex: 1; */
`;

export const NombrePetshop = styled.Text`
    font-weight: 800;
    font-size: 20px;
`;

export const WrapperHorario = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const TextoHorario = styled.Text`
    color: #000;
`;

export const Rating = styled.View`
    display: flex;
    flex-direction: row;
`;

export const RightSideContainer = styled.View`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UbicationWrapper = styled.View``;

export const Distance = styled.Text`
  font-size: 20px;
`;
