import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { colors } from '../../constants';

export const ContainerVeterinariaScreen = styled.ScrollView`

`;

export const ContenedorHeader = styled(ImageBackground)`
  height: 200px;
  object-fit: 'cover';
  flex: 1;
`;

export const ContenedorNombreVet = styled.Text`
  color: #fff;
  background-color: ${colors.primaryTransparent};
  font-size: 25px;
  position: absolute;
  padding: 10px 20px;
  bottom: 0;
`;

export const ContainerData = styled.View`
  padding: 20px;
`;

export const WrapperPropietaria = styled.View`
  display:flex;
  flex-direction: row;
  align-items:center;
  gap: 20px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.primaryTransparent};
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;

export const Pronombre = styled.Text`
  font-size: 25px;

`;

export const Propietaria = styled.Text`
  font-size: 25px;
  font-weight: 800;
  
`;


export const WrapperItems = styled.View`
  margin-top: 10px;
`;

export const IconAndText = styled.TouchableOpacity`
  display:flex;
  flex-direction: row;
  align-items:center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled.View`
  background-color: ${colors.primaryLight};
  height:50px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

export const TextItem = styled.Text`
  font-size: 20px;
`;