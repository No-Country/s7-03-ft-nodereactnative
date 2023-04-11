import { ScrollView } from 'react-native';
import { CuidadorBar } from '../../components';
import { VeterinariasBar } from '../../components/VeterinariasBar';
import { useGetVeterinariesQuery } from '../../reduxApp/services/veterinaries/vetServices';
import {
    ContainerVeterinario,
    ScrollViewContainer,
} from './veterinarias.style';

export interface VeterinariasProps {}

const Veterinarias: React.FC<VeterinariasProps> = () => {
    const { data } = useGetVeterinariesQuery('');

    // console.log(data.results.veterinaries);
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
                {listaVets?.map((vet: Vet) => {
                    return <VeterinariasBar {...vet} />;
                })}
            </ScrollViewContainer>
        </ContainerVeterinario>
    );
};

export default Veterinarias;
