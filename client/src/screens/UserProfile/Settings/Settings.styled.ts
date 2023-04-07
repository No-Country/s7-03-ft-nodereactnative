import styled from 'styled-components/native';
import { colors } from '../../../constants/colors';

export const ViewMenu = styled.View`
    align-items: center;
    margin-top: 20px;
    padding: 10px 30px 40px 30px;
    height: 100%;
    width: 100%;
`;

export const ViewContainer = styled.View`
    margin-top: 10px;
    flex: 1;
    width: 100%;
    justify-content: space-evenly;
`;

export const Input = styled.TextInput`
    padding: 10px;
    background-color: ${colors.backgroundLightViolet};
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border: 1px solid;
    border-color: black;
`;

export const Label = styled.Text`
    color: black;
    margin: 15px auto -8px 10px;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;
