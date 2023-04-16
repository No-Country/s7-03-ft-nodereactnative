import styled from 'styled-components/native';
import { colors } from '../../../constants/colors';

interface InputProps {
    disabled?: boolean;
}

export const ViewMenu = styled.View`
    align-items: center;
    padding: 10px 20px 0px 20px;
    height: 100%;
    width: 100%;
    background-color: white;
`;

export const ViewContainer = styled.View`
    margin-top: 10px;
    flex: 1;
    width: 100%;
    justify-content: space-evenly;
`;

export const Input = styled.TextInput<InputProps>`
    padding: 10px;
    background-color: ${(props) => (props.disabled ? 'gray' : 'white')};
    height: 40px;
    border-radius: 2px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border: 1px solid;
    border-color: gray;
`;

export const Label = styled.Text<InputProps>`
    color: black;
    margin: 10px 0px 5px 1px;
    padding: 0 5px;
    background-color: ${(props) => (props.disabled ? 'gray' : 'white')};
`;
