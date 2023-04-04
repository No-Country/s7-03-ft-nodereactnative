import { TouchableOpacityProps, ViewProps, TextProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuIcon, MenuItemWrapper, MenuText } from './MenuItem.styled';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../../constants';

export interface MenuItemProps {
    to: keyof RootDrawerParamList;
    label: string;
    icon: any;
    estaActivo: boolean;
}

export interface MenuItemWrapperProps extends TouchableOpacityProps {
    estaActivo: boolean;
}

export interface MenuIconProps extends ViewProps {
    estaActivo: boolean;
}

export interface MenuTextProps extends TextProps {
    estaActivo: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, label, icon, estaActivo }) => {
    const navigation =
        useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

    return (
        <MenuItemWrapper
            onPress={() => navigation.navigate(to)}
            estaActivo={estaActivo}
        >
            <MenuIcon estaActivo={estaActivo}>{icon}</MenuIcon>
            <MenuText estaActivo={estaActivo}>{label}</MenuText>
        </MenuItemWrapper>
    );
};

export default MenuItem;
