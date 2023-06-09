import styled from 'styled-components/native';
import { colors } from '../../../constants';

interface ButtonProps {
    primary?: boolean;
    error?: boolean;
}

export const ViewForm = styled.View`
    background-color: white;
    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextLogo = styled.Text`
    color: #551391;
    font-weight: 400;
    line-height: 28px;
    font-size: 22px;
`;

export const ViewLogo = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Form = styled.View`
    margin: 36px 0px 36px 0px;
    padding: 0px 50px 0px 50px;
    width: 100%;
`;

export const Label = styled.Text`
    color: black;
    margin: 15px auto -8px 10px;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;

export const Input = styled.TextInput<ButtonProps>`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border: 1px solid;
    border-color: ${(props) => (props.error ? 'red' : 'black')};
`;

export const ViewButton = styled.View`
    width: 100%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => (props.primary ? 'white' : '#551391')};
    padding: 10px;
    border: 1px solid;
    border-color: ${(props) => (props.primary ? colors.primary : '#551391')};
    border-radius: 4px;
    margin-top: 20px;
    width: 160px;
    border-radius: 20px;
`;

export const ButtonText = styled.Text<ButtonProps>`
    color: ${(props) => (props.primary ? 'white' : colors.primary)};
    font-size: 16px;
    text-align: center;
`;

export const TextSesion = styled.Text`
    font-size: 18px;
    letter-spacing: -1px;
    text-align: center;
    width: 100%;
`;

export const ViewIcons = styled.View`
    flex-direction: row;
    margin-top: 36px;
    gap: 40px;
`;
