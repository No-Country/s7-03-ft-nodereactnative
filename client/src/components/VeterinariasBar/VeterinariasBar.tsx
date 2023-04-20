import { TouchableOpacity } from 'react-native';
import {
    ContainerFotoVet,
    DataVetContainer,
    FotoVet,
    NombreVeterinaria,
    Rating,
    ShortDescription,
    VetTabContainer,
} from './VeterinariasBar.styled';
import {  useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';
import { StarRating } from '../StarRating';
import { shortText } from '../../utils/functions';

export interface VetBarProps {
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

const VeterinariasBar: React.FC<VetBarProps> = (vet) => {
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, 'VetDetail'>>();
        
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                marginBottom: 15,
                margin: 5,
            }}
            onPress={() => navigation.navigate('VetDetail', { vet })}
        >
            <VetTabContainer>
                <ContainerFotoVet>
                    <FotoVet
                        source={require('../../../assets/DefaultUserPic.png')}
                    />
                </ContainerFotoVet>
                <DataVetContainer>
                    <NombreVeterinaria>
                        {shortText(vet?.name, 20)}
                    </NombreVeterinaria>
                    <ShortDescription>
                        {shortText(vet?.description, 40)}
                    </ShortDescription>
                    <Rating>
                        <StarRating rating={4} />
                    </Rating>
                </DataVetContainer>
            </VetTabContainer>
        </TouchableOpacity>
    );
};

export default VeterinariasBar;
