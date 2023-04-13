import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const ContainerVeterinario = styled(ImageBackground)`
    background-image: url('../../../assets/fondoHuellitas.png');
    flex: 1;
    object-fit: 'cover';
`

export const ScrollViewContainer = styled.ScrollView`
      padding: 10px;
      flex: 1;

`;