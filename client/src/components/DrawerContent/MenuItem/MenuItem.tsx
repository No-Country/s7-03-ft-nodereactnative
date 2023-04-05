import { TouchableOpacityProps, ViewProps, TextProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuIcon, MenuItemWrapper, MenuText } from './MenuItem.styled';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../../constants';
import { useDispatch } from 'react-redux';
import { logout } from '../../../reduxFeature/auth/authSlice';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';
import Alerts from '../../Alerts/Alerts';

export interface MenuItemProps {
    to?: keyof RootDrawerParamList;
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

    const [alertShow, setAlertShow] = useState(false);

    const handleCancel = () => {
        setAlertShow(false);
    };

    const handleSubmit = () => {
        if (label === 'Cerrar Sesion') {
            setAlertShow(true);
        } else {
            to && navigation.navigate(to);
        }
    };

    return (
        <>
            <MenuItemWrapper onPress={handleSubmit} estaActivo={estaActivo}>
                <MenuIcon estaActivo={estaActivo}>{icon}</MenuIcon>
                <MenuText estaActivo={estaActivo}>{label}</MenuText>
            </MenuItemWrapper>
            {alertShow && (
                <Alerts
                    title="Cerrar Sesion"
                    cancelText="Cancelar"
                    confirmText="Confirmar"
                    message="Estas a punto de cerrar sesion"
                    alertShow={alertShow}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default MenuItem;
