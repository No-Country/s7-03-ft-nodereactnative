import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
    DrawerContentContainer,
    HeaderContainer,
    MenuContainer,
    UserName,
    UserPicture,
} from './drawerContent.styled';
import { MenuItem } from './MenuItem';
import { AntDesign, Feather } from '@expo/vector-icons';

export interface DrawerContentProps {
    props: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ props }) => {

    const actualRoute = props.state.routeNames[props.state.index]
    return (
        <DrawerContentScrollView>
            <DrawerContentContainer>
                <HeaderContainer>
                    <UserPicture
                        source={require('../../../assets/DefaultUserPic.png')}
                    />
                    <UserName>Cintia jimena Martinez Juarez</UserName>
                </HeaderContainer>
                <MenuContainer>
                    <MenuItem
                        to={'home_drawer'}
                        label="Inicio"
                        icon={<AntDesign name="home" size={30} color={actualRoute === 'home_drawer' ?"#fff" : "#000"}/>}
                        estaActivo={
                            actualRoute ===
                            'home_drawer'
                        }
                    />
                    <MenuItem
                        to={'misPedidos_drawer'}
                        label="Mis pedidos"
                        icon={<Feather name="shopping-bag" size={30} color={actualRoute === 'misPedidos_drawer' ?"#fff" : "#000"}/>}
                        estaActivo={
                            actualRoute ===
                            'misPedidos_drawer'
                        }
                    />
                </MenuContainer>
            </DrawerContentContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerContent;
