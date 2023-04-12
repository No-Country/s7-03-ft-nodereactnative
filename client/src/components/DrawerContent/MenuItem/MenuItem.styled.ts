import styled from 'styled-components/native';
import { MenuItemWrapperProps, MenuTextProps } from './MenuItem';
import { colors } from '../../../constants';

export const MenuItemWrapper = styled.TouchableOpacity<MenuItemWrapperProps>`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    flex: 1;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom-style: solid;
    border-bottom-color: #EBEBEB;
    border-bottom-width: 1px;
   
`;


export const MenuText = styled.Text<MenuTextProps>`
    font-size: 18px;
    align-self: center;
    flex: 6;
    color: ${colors.primary};
    font-weight: ${(props) => (props.estaActivo ? '700' : '400')};

`;
