import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
    DrawerContentContainer,
    HeaderContainer,
    MenuContainer,
    UserName,
    UserPicture,
} from './drawerContent.styled';
import { MenuItem } from './MenuItem';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { AuthSlice } from '../../router/Router';

export interface DrawerContentProps {
    props: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ props }) => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const fullName = `${infoUser?.user?.firstName} ${infoUser?.user?.lastName}`
    const actualRoute = props.state.routeNames[props.state.index];
    return (
        <DrawerContentScrollView>
            <DrawerContentContainer>
                <HeaderContainer>
                    <UserPicture
                        source={require('../../../assets/DefaultUserPic.png')}
                    />
                    <UserName>{fullName}</UserName>
                </HeaderContainer>
                <MenuContainer>
                    <MenuItem
                        to={'misPedidos_drawer'}
                        label="Mis pedidos"
                        icon={
                            <Feather
                                name="shopping-bag"
                                size={30}
                                color={
                                    actualRoute === 'misPedidos_drawer'
                                        ? '#fff'
                                        : '#000'
                                }
                            />
                        }
                        estaActivo={actualRoute === 'misPedidos_drawer'}
                    />
                </MenuContainer>
            </DrawerContentContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerContent;
