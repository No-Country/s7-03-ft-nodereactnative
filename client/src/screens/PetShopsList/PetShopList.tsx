import { ActivityIndicator } from 'react-native';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import {
    ContainerVeterinario,
    ScrollViewContainer,
} from './petShopLists.style';
import { PetShopBar } from '../../components/PetShopBar';
import { useSelector } from 'react-redux';
import { PosState } from '../../reduxFeature/user/userPositionSlice';
import { calculateDistance } from '../../hooks/calculateDistance';
import { useEffect, useState } from 'react';

export interface VeterinariasProps {}

const PetShopList: React.FC<VeterinariasProps> = () => {
    const { data, isLoading } = useGetVeterinariesQuery('');

    const listaVets: Vet[] = data?.results?.veterinaries;

    const { latitude, longitude } = useSelector(
        (state: PosState) => state.userPositionSlice
    );

    const [sortedList, setSortedList] = useState<Vet[]>([])
    
    useEffect(() => {
        try {
            if (listaVets)
            {
                const newVetList = listaVets.slice().sort((vet1, vet2) =>
                    calculateDistance({
                        longitude1: longitude!,
                        latitude1: latitude!,
                        longitude2: vet1.longitude,
                        latitude2: vet1.latitude,
                    })-
                    calculateDistance({
                        longitude1: longitude!,
                        latitude1: latitude!,
                        longitude2: vet2.longitude,
                        latitude2: vet2.latitude,
                    })
                );
                    setSortedList(newVetList)
            }            
        } catch (error) {
            console.log('err',error);
            
        }
    }, [listaVets])
    

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
                        return <PetShopBar key={vet.id} {...vet} />;
                    })
                )}
            </ScrollViewContainer>
        </ContainerVeterinario>
    );
};

export default PetShopList;
