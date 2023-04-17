import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    Accuracy,
} from 'expo-location';
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import { VetInterface } from '../../interfaces/vetInterfaces';
import BottomSheet, { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { PosState } from '../../reduxFeature/user/userPositionSlice';
import { VetPosState } from '../../reduxFeature/veterinaries/vetPositionSlice';
import { ButtonPrimary } from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types';
import { VetBarProps } from '../../components/VeterinariasBar/VeterinariasBar';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const RowView = styled.View`
    flex-direction: row;
    margin: 5px;
`;

const ContainView = styled.View`
    padding: 0 20px;
`;

const TextView = styled.Text`
    margin-left: 10px;
`;

const TextTitle = styled.Text`
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const Maps = () => {
    const navigation = useNavigation<StackNavigationProp<any, 'Veterinarias'>>();

    const positionSelector = useSelector(
        (state: PosState) => state.userPositionSlice
    );
    const initialSelector = useSelector(
        (state: VetPosState) => state.vetPositionSlice
    );

    const [origin, setOrigin] = useState({
        latitude: -41.965159,
        longitude: -71.535335,
    });
    const [mapOk, setMapOk] = useState(false);
    const [veterinaries, setVeterinaries] = useState<VetBarProps[]>([]);
    const [vet, setVeterinary] = useState<VetBarProps>();

    const [isOpen, setIsOpen] = useState(true);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        console.log('handleSheetChanges', index);
    }, []);

    const { data } = useGetVeterinariesQuery('');

    const getLocationPermission = async () => {
        const { status } = await requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Permiso denegado');
            return;
        }
        await getCurrentPositionAsync({accuracy: Accuracy.Lowest})
            .then((pos) => {
                setOrigin({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                });
                console.log(pos);
                
            })
            .catch((e) => console.log(e));
            setMapOk(true);
            console.log(veterinaries);
            
        };

        useEffect(() => {
        getLocationPermission();
    }, []);
    
    useEffect(() => {
        if (data) setVeterinaries(data.results.veterinaries);      
    }, [data])
    

    return (
        <BottomSheetModalProvider>
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
                    {veterinaries.map((vets) => (
                        <Marker
                            key={vets.id}
                            coordinate={{
                                latitude: vets.latitude,
                                longitude: vets.longitude,
                            }}
                            onPress={() => {
                                handleSheetChanges(1);
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
                <ContainView>
                    {vet && (
                        <>
                            <RowView>
                                <Image
                                    source={require('../../../assets/vetImage.png')}
                                    style={{ width: 70, height: 70 }}
                                />
                                <View>
                                    <TextTitle>{vet.name}</TextTitle>
                                    <RowView>
                                        <FontAwesome
                                            name="star"
                                            size={15}
                                            color="black"
                                        />
                                        <FontAwesome
                                            name="star"
                                            size={15}
                                            color="black"
                                        />
                                        <FontAwesome
                                            name="star"
                                            size={15}
                                            color="black"
                                        />
                                        <FontAwesome
                                            name="star-half-empty"
                                            size={15}
                                            color="black"
                                        />
                                        <FontAwesome
                                            name="star-o"
                                            size={15}
                                            color="black"
                                        />
                                    </RowView>
                                </View>
                            </RowView>
                            <RowView>
                                <FontAwesome
                                    name="map-marker"
                                    size={24}
                                    color="black"
                                />
                                <TextView>{vet.address}</TextView>
                            </RowView>
                            <RowView>
                                <FontAwesome
                                    name="clock-o"
                                    size={24}
                                    color="black"
                                />
                                <TextView>
                                    Abre a las 09:30 hasta 18:00
                                </TextView>
                            </RowView>
                            <RowView>
                                <FontAwesome
                                    name="phone"
                                    size={24}
                                    color="black"
                                />
                                <TextView>{vet.phone}</TextView>
                            </RowView>
                            <TextView>{vet.description}</TextView>
                            <TextView></TextView>
                            <ButtonPrimary
                                onPress={() =>
                                    navigation.navigate('Veterinarias', {
                                        screen: 'VetDetail',
                                        params: {vet},
                                    })
                                }
                                title="Ir a la tienda"
                            />
                        </>
                    )}
                </ContainView>
            </BottomSheet>
        </BottomSheetModalProvider>
    );
};

export default Maps;
