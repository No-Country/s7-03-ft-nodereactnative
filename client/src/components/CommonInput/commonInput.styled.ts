import styled from 'styled-components/native';

export const WrapperCommonInput = styled.View`
    border-style: solid;
    border-color: #79747e;
    border-width: 1px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    position: absolute;
    left: 15px;
    top: -15px;
    background-color: #fff;
    color: #79747e;
    font-size: 15px;
    font-weight: 600;
    padding: 5px;
`;

export const CustomTextInput = styled.TextInput`
    padding: 10px;
`;
