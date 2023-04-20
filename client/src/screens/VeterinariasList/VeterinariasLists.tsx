import { ActivityIndicator } from 'react-native';
import { VeterinariasBar } from '../../components/VeterinariasBar';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import {
    ContainerVeterinario,
    ScrollViewContainer,
} from './veterinariasLists.style';
import { calculateDistance } from '../../hooks/calculateDistance';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PosState } from '../../reduxFeature/user/userPositionSlice';

export interface VeterinariasProps {}

const Veterinarias: React.FC<VeterinariasProps> = () => {
    const { data, isLoading } = useGetVeterinariesQuery('');

    const listaVets: Vet[] = data?.results?.veterinaries;

    const { latitude, longitude } = useSelector(
        (state: PosState) => state.userPositionSlice
    );

    const [sortedList, setSortedList] = useState<Vet[]>([]);

    const cerca = (vet: Vet) => {
        return (
            Math.abs(vet.latitude - latitude!) < 20 &&
            Math.abs(vet.longitude - longitude!) < 20
        );
    };

    useEffect(() => {
        try {
            if (listaVets) {
                const newVetList = listaVets
                    .filter((vet) => cerca(vet))
                    .sort(
                        (vet1, vet2) =>
                            calculateDistance({
                                longitude1: longitude!,
                                latitude1: latitude!,
                                longitude2: vet1.longitude,
                                latitude2: vet1.latitude,
                            }) -
                            calculateDistance({
                                longitude1: longitude!,
                                latitude1: latitude!,
                                longitude2: vet2.longitude,
                                latitude2: vet2.latitude,
                            })
                    );
                setSortedList(newVetList);
            }
        } catch (error) {
            console.log('err', error);
        }
    }, [listaVets]);

    interface Vet {
        id: string;
        userId: string;
        name: string;
        description: string;
        country: string;
        address: string;
        latitude: number;
        longitude: number;
        phone: string;
        isActive: boolean;
        user: {
            id: string;
            firstName: string;
            lastName: string;
            country: string;
        };
    }
    return (
        <ContainerVeterinario
            source={require('../../../assets/fondoHuellitas.png')}
        >
            <ScrollViewContainer>
                {isLoading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    sortedList?.map((vet: Vet) => {
                        return <VeterinariasBar key={vet.id} {...vet} />;
                    })
                )}
            </ScrollViewContainer>
        </ContainerVeterinario>
    );
};

export default Veterinarias;
