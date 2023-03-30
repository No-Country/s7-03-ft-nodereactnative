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
    background-color: ${colors.secondary};
`;

const Text = styled.Text`
    font-size: 13px;
    text-align: center;
`;
interface Props {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
}

export const ButtonSecondary = (props: Props) => {
    const { onPress, title } = props;

    return (
        <Button onPress={onPress}>
            <Text>{title}</Text>
        </Button>
    );
};
