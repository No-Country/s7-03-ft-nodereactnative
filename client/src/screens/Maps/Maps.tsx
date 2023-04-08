import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
const vetLoc = require('../../../assets/veterinaryLoc.webp')

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const Maps = () => {
    const [origin, setOrigin] = useState({
        latitude: -41.965159,
        longitude: -71.535335,
    });
    const [mapOk, setMapOk] = useState(false);

    const getLocationPermission = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permiso denegado');
            return;
        }
        const location = await getCurrentPositionAsync();
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        setOrigin(current);
        setMapOk(true);
    };

    useEffect(() => {
        getLocationPermission();
    }, []);

    return (
        <>
            {mapOk && (
                <Map
                    initialRegion={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    <Marker coordinate={origin} />
                    <Marker
                        coordinate={{
                            latitude: origin.latitude-0.02,
                            longitude: origin.longitude-0.01,
                        }}
                        image={vetLoc}
                    />
                    <Marker
                        coordinate={{
                            latitude: origin.latitude-0.03,
                            longitude: origin.longitude+0.01,
                        }}
                        image={vetLoc}
                    />
                    <Marker
                        coordinate={{
                            latitude: origin.latitude+0.01,
                            longitude: origin.longitude-0.04,
                        }}
                        image={vetLoc}
                    />
                </Map>
            )}
        </>
    );
};

export default Maps;
