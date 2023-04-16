import styled from 'styled-components/native';
import { colors } from '../../constants';

export const VetTabContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #fff;
    align-items: center;
    height: 88px;
`;

export const ContainerFotoVet = styled.View`
    height: 70px;
    aspect-ratio: 1/1;
    margin-right: 15px;
`;

export const FotoVet = styled.Image`
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: #fff;
    border-radius: 100px;
`;

export const DataVetContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    font-size: 0px;
    flex: 1;
`;

export const NombreVeterinaria = styled.Text`
  font-weight: 800;
  font-size: 20px;
`;

export const ShortDescription = styled.Text`
  
`;

export const Rating = styled.View`
  display: flex;
  flex-direction: row;

`;