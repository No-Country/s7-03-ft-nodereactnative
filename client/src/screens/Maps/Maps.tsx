import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Button, Image, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import { VetInterface } from '../../interfaces/vetInterfaces';
import BottomSheet, { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { PosState } from '../../reduxFeature/user/userPositionSlice';
import { VetPosState } from '../../reduxFeature/veterinaries/vetPositionSlice';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const Maps = () => {
    const positionSelector = useSelector(
        (state: PosState) => state.userPositionSlice
    );
    const initialSelector = useSelector(
        (state: VetPosState) => state.vetPositionSlice
    );

    const [origin, setOrigin] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [mapOk, setMapOk] = useState(false);
    const [veterinaries, setVeterinaries] = useState<VetInterface[]>([]);
    const [veterinary, setVeterinary] = useState<VetInterface>();

    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        // console.log('handleSheetChanges', index);
    }, []);

    const { data } = useGetVeterinariesQuery('');

    useEffect(() => {
        if (data) setVeterinaries(data.results.veterinaries);
    }, [data]);

    useEffect(() => {
        if (positionSelector.latitude && positionSelector.longitude) {
            setOrigin({
                latitude: positionSelector.latitude,
                longitude: positionSelector.longitude,
            });
            setMapOk(true);
        }
    }, []);

    return (
        <BottomSheetModalProvider>
            {mapOk && (
                <Map
                    initialRegion={{
                        latitude: initialSelector.latitude
                            ? initialSelector.latitude
                            : origin.latitude,
                        longitude: initialSelector.longitude
                            ? initialSelector.longitude
                            : origin.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    <Marker coordinate={origin} />
                    {veterinaries.map((vets) => (
                        <Marker
                            key={vets.id}
                            coordinate={{
                                latitude: vets.latitude,
                                longitude: vets.longitude,
                            }}
                            onPress={() => {
                                handleSheetChanges(0);
                                setVeterinary(vets);
                            }}
                        >
                            <Image
                                source={require('../../../assets/veterinaryLoc.webp')}
                                style={{ height: 35 }}
                                resizeMode="center"
                                resizeMethod="scale"
                            />
                        </Marker>
                    ))}
                </Map>
            )}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose
                onChange={handleSheetChanges}
            >
                <View>
                    {veterinary && (
                        <>
                            <Text>Nombre: {veterinary.name}</Text>
                            <Text>Teléfono: {veterinary.phone}</Text>
                            <Text>Dirección: {veterinary.address}</Text>
                            <Text>{veterinary.description}</Text>
                            <Button title="Ir a la tienda" />
                        </>
                    )}
                </View>
            </BottomSheet>
        </BottomSheetModalProvider>
    );
};

export default Maps;
