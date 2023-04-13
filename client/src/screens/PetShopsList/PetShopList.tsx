import { ActivityIndicator  } from 'react-native';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import {
    ContainerVeterinario,
    ScrollViewContainer,
} from './petShopLists.style';
import { PetShopBar } from '../../components/PetShopBar';

export interface VeterinariasProps {}

const PetShopList: React.FC<VeterinariasProps> = () => {
    const { data, isLoading } = useGetVeterinariesQuery('');

    const listaVets = data?.results?.veterinaries;
   

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
                { isLoading ? <ActivityIndicator size="large" /> : listaVets?.map((vet: Vet) => {
                    return <PetShopBar key={vet.id} {...vet} />;
                })}
            </ScrollViewContainer>
        </ContainerVeterinario>
    );
};

export default PetShopList;
