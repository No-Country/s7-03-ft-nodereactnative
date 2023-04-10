import styled from 'styled-components/native';
import { colors } from '../../../constants';

export const Container = styled.ScrollView`
    background-color: white;
`;

export const ViewForm = styled.View`
    background-color: white;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    color: black;
    margin: 15px auto -8px 30px;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;

export const CountryView = styled.View`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CountryPick = styled.View`
    border-radius: 4px;
    border-width: 1px;
    padding: 3px;
`;

interface PropsInput {
    errors?: boolean;
}

export const Input = styled.TextInput<PropsInput>`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
    margin-bottom: 5px;
    border-color: ${(props) => (props.errors ? 'red' : 'black')};
`;

export const LabelError = styled.Text`
    font-size: 10px;
    color: red;
    margin: -14px 35px 0 auto;
    padding: 0 5px;
    z-index: 5;
    background-color: white;
`;

export const Img = styled.Image`
    width: 60%;
    object-fit: contain;
`;

export const Spinner = styled.ActivityIndicator`
    margin: 10px 0px;
    height: 36px;
`;
