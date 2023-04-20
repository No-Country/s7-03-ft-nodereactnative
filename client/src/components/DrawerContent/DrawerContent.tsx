import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
    DrawerContentContainer,
    HeaderContainer,
    ImgPerrito,
    ItemMisVeterinarias,
    MainDrawerContainer,
    MenuContainer,
    TextoListaVet,
    UserName,
    WrapperListasMisVeterinarias,
} from './drawerContent.styled';
import { MenuItem } from './MenuItem';
import { useSelector } from 'react-redux';
import { AuthSlice } from '../../router/Router';
import { firstLetterMayus } from '../../utils/functions';
import { useGetUserQuery } from '../../reduxApp/services/users/users';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootDrawerParamList, RootStackParamList } from '../../constants/types';

export interface DrawerContentProps {
    props: any;
    id: string;
    userId: string;
    name: string;
    description: string;
    country: string;
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
    isActive: boolean;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        country: string;
    };
}

const DrawerContent: React.FC<DrawerContentProps> = ({ props }) => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    const { data } = useGetUserQuery(infoUser.user.id);
    const misVeterinarias = data?.results?.user?.veterinary;

    const [showHide, setShowHide] = useState(false);

    const actualRoute = props.state.routeNames[props.state.index];
    const navigation =
        useNavigation<StackNavigationProp<RootDrawerParamList, 'VetDetail'>>();
        
    return (
        <DrawerContentScrollView style={{ height: 700 }}>
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
                        <MenuItem
                            to={'add_veterinarie'}
                            label="Registra tu veterinaria"
                            estaActivo={actualRoute === 'add_veterinarie'}
                        />
                        <ItemMisVeterinarias
                            onPress={() => setShowHide(!showHide)}
                        >
                            <TextoListaVet>Mis veterinarias</TextoListaVet>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                size={24}
                                color="black"
                            />
                        </ItemMisVeterinarias>
                        <WrapperListasMisVeterinarias height={showHide}>
                            {misVeterinarias?.map((veterinaria) => {
                                return (
                                    <ItemMisVeterinarias
                                        onPress={() =>
                                            navigation.navigate('VetDetail', {
                                                veterinaria,
                                            })
                                        }
                                        key={veterinaria.id}
                                    >
                                        <TextoListaVet>
                                            {veterinaria.name}
                                        </TextoListaVet>
                                    </ItemMisVeterinarias>
                                );
                            })}
                        </WrapperListasMisVeterinarias>
                        <MenuItem label="Cerrar Sesion" estaActivo={false} />
                    </MenuContainer>
                </DrawerContentContainer>
                <ImgPerrito source={require('../../../assets/DrawerDog.png')} />
            </MainDrawerContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerContent;
