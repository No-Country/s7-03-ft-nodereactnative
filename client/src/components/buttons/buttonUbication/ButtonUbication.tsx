import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    width: 286px;
    height: 39px;
    border-radius: 30px;
    background-color: white;
`;

const Text = styled.Text`
    font-size: 16px;
    align-self: center;
    color: black;
`;
interface Props {
    onPress?: (event: GestureResponderEvent) => void;
}

export const ButtonUbication = (props: Props) => {
    const { onPress } = props;

    return (
        <Button onPress={onPress} 
        style={{
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        }}>
            <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color="black"
            />
            <Text> Ubicación</Text>
        </Button>
    );
};
