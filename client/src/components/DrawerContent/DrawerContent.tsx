import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View } from 'react-native';
import {
    DrawerContentContainer,
    HeaderContainer,
    ImgPerrito,
    MainDrawerContainer,
    MenuContainer,
    UserName,
} from './drawerContent.styled';
import { MenuItem } from './MenuItem';
import { useSelector } from 'react-redux';
import { AuthSlice } from '../../router/Router';
import { firstLetterMayus } from '../../utils/functions';

export interface DrawerContentProps {
    props: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ props }) => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const fullName = `${infoUser?.user?.firstName} ${infoUser?.user?.lastName}`;
    const actualRoute = props.state.routeNames[props.state.index];
    return (
        <DrawerContentScrollView style={{height: 700}}>
            <MainDrawerContainer>
                <DrawerContentContainer>
                    <HeaderContainer>
                        <UserName>
                            Hola, {firstLetterMayus(infoUser?.user?.firstName)}!
                        </UserName>
                    </HeaderContainer>
                    <MenuContainer>
                        <MenuItem
                            to={'misPedidos_drawer'}
                            label="Mis pedidos"
                            estaActivo={actualRoute === 'misPedidos_drawer'}
                        />
                        <MenuItem label="Cerrar Sesion" estaActivo={false} />
                    </MenuContainer>
                </DrawerContentContainer>
                <ImgPerrito source={require('../../../assets/DrawerDog.png')} />
            </MainDrawerContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerContent;
