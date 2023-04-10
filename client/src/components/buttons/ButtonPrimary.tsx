import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { colors } from '../../constants';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    align-self: center;
    padding: 8px 0px;
    margin: 10px 0px;
    width: 136px;
    height: 36px;
    border-radius: 20px;
    background-color: ${(props) =>
        props.disabled ? colors.primaryLight : colors.primary};
`;

const Text = styled.Text`
    font-size: 13px;
    text-align: center;
    color: white;
`;
interface Props {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    disabled?: boolean;
}

export const ButtonPrimary = (props: Props) => {
    const { onPress, title, disabled } = props;

    return (
        <Button onPress={onPress} disabled={disabled || false}>
            <Text>{title}</Text>
        </Button>
    );
};
