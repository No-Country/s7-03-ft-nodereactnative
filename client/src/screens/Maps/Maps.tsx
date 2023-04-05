import React, { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components/native';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const Maps = () => {
    const [origin, setOrigin] = useState({
        latitude: -41.965159,
        longitude: -71.535335,
    });

    return (
        <Map
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Marker coordinate={origin} />
        </Map>
    );
};

export default Maps;
