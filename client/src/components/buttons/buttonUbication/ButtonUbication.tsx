import React, { useEffect } from 'react';
import { GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { PosState } from '../../../reduxFeature/user/userPositionSlice';
import usePosition from '../../../hooks/usePosition';

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

    const positionSelector = useSelector(
        (state: PosState) => state.userPositionSlice
    );
    // console.log(positionSelector);

    const { getLocationPermission } = usePosition();

    useEffect(() => {
        getLocationPermission();
    }, []);

    return (
        <Button
            onPress={onPress}
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
            }}
        >
            <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color="black"
            />
            <Text>
                {' '}
                {positionSelector?.city
                    ? positionSelector.city
                    : 'Mi ubicación'}{' '}
            </Text>
        </Button>
    );
};
