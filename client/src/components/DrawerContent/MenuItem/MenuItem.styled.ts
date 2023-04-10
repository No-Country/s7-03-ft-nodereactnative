import styled from 'styled-components/native';
import { MenuIconProps, MenuItemWrapperProps, MenuTextProps } from './MenuItem';
import { colors } from '../../../constants';

export const MenuItemWrapper = styled.TouchableOpacity<MenuItemWrapperProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) =>
        props.estaActivo ? colors.primaryLight : '#fff'};
`;

export const MenuIcon = styled.View<MenuIconProps>`
    margin-right: 30px;
    align-self: flex-end;
    flex: 1;
`;

export const MenuText = styled.Text<MenuTextProps>`
    font-size: 18px;
    align-self: center;
    flex: 6;
    color: ${(props) => (props.estaActivo ? '#fff' : '#000')};
`;
