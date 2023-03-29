import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants';

interface Props {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
}

export const ButtonSecondaryEmpty = (props: Props) => {
    const { onPress, title } = props;

    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    button: {
        alignSelf: 'center',
        paddingVertical: 8,
        marginVertical: 10,
        width: 136,
        height: 36,
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderWidth:1,
        borderColor: colors.secondary
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        color:colors.secondary
    },
});
