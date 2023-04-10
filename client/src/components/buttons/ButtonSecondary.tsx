import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { colors } from '../../constants';
import styled from 'styled-components/native';

interface Props {
    onPress: (event: GestureResponderEvent) => void;
    title?: string;
    color?: boolean;
}

export const ButtonSecondary = (props: Props) => {
    const { onPress, title, color } = props;

    return (
        <Button color={color} onPress={onPress}>
            <Text>{title}</Text>
        </Button>
    );
};

const Button = styled.TouchableOpacity<Props>`
    align-self: center;
    padding: 8px 0px;
    margin: 10px 0px;
    width: 136px;
    height: 36px;
    border-radius: 20px;
    background-color: ${(props) => (props.color ? 'red' : colors.secondary)};
`;

const Text = styled.Text`
    font-size: 13px;
    text-align: center;
    color: white;
`;
