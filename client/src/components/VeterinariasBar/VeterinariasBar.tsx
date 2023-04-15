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
import { useDispatch } from 'react-redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import {
    setVetDeletePosition,
    setVetPosition,
} from '../../reduxFeature/veterinaries/vetPositionSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';
import { StarRating } from '../StarRating';

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

    // const dispatch = useDispatch()
    // const navigate = useNavigation<StackNavigationProp<ParamListBase>>()
    // const handleOnPress = ()=>{
    //     const vetPos = {
    //         latitude: vet.latitude,
    //         longitude: vet.longitude
    //     }
    //     dispatch(setVetPosition(vetPos))
    //     navigate.navigate('Maps')
    //     setTimeout(() => {
    //         dispatch(setVetDeletePosition())
    //     }, 2000);
    // }

    // const dispatch = useDispatch()
    // const navigate = useNavigation<StackNavigationProp<ParamListBase>>()
    // const handleOnPress = ()=>{
    //     const vetPos = {
    //         latitude: vet.latitude,
    //         longitude: vet.longitude
    //     }
    //     dispatch(setVetPosition(vetPos))
    //     navigate.navigate('Maps')
    //     setTimeout(() => {
    //         dispatch(setVetDeletePosition())
    //     }, 2000);
    // }
    let shortName

    if (vet?.name.length > 20) {
        shortName = vet?.name.slice(0, 20) + '...'
    }


    let shortDesc
    if (vet?.description.length > 40) {
        const shortDesc = vet?.description.slice(0, 40) + '...';
        
    }
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
            // onPress={handleOnPress}
        >
            <VetTabContainer>
                <ContainerFotoVet>
                    <FotoVet
                        source={require('../../../assets/DefaultUserPic.png')}
                    />
                </ContainerFotoVet>
                <DataVetContainer>
                    <NombreVeterinaria>{shortName || vet?.name}</NombreVeterinaria>
                    <ShortDescription>{shortDesc || vet?.description}</ShortDescription>
                    <Rating>
                        <StarRating rating={4} />
                    </Rating>
                </DataVetContainer>
            </VetTabContainer>
        </TouchableOpacity>
    );
};

export default VeterinariasBar;
