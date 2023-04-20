import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { colors } from '../../constants';

interface WrapperListasMisVeterinariasProps extends ViewProps {
    height: boolean;
}

export const MainDrawerContainer = styled.View`
    display: flex;
    justify-content: space-around;
`;

export const DrawerContentContainer = styled.View`
    padding: 15px;
    display: flex;
    justify-content: space-around;
`;

export const HeaderContainer = styled.View`
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 10px;
`;

export const UserPicture = styled.Image`
    height: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 400px;
    margin-bottom: 10px;
`;

export const UserName = styled.Text`
    font-size: 35px
    text-align: left;
    font-weight: 500;
`;

export const MenuContainer = styled.View``;

export const ImgPerrito = styled.Image`
    height: 200px;
    aspect-ratio: 1/1;
    object-fit: contain;
`;

export const ItemMisVeterinarias = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    flex: 1;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom-style: solid;
    border-bottom-color: #EBEBEB;
    border-bottom-width: 1px;
`;

export const TextoListaVet = styled.Text`
      font-size: 18px;
      color: ${colors.primary};

`;

export const WrapperListasMisVeterinarias = styled.View<WrapperListasMisVeterinariasProps>`
  padding-left: 20px;
  height:${(props) => props.height ? 'auto' : 0}
  overflow: hidden;
`;
