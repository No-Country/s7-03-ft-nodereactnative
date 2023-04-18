import { TouchableOpacity } from 'react-native';
import {
    ContainerFotoPetshop,
    DataPetshopContainer,
    Distance,
    FotoPetshop,
    LeftSideContainer,
    NombrePetshop,
    PetshopTabContainer,
    Rating,
    RightSideContainer,
    TextoHorario,
    UbicationWrapper,
    WrapperHorario,
} from './petShopBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import {
    setVetDeletePosition,
    setVetPosition,
} from '../../reduxFeature/veterinaries/vetPositionSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';
import { StarRating } from '../StarRating';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { PosState } from '../../reduxFeature/user/userPositionSlice';
import { calculateDistance } from '../../hooks/calculateDistance';
import { useEffect, useState } from 'react';

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

const PetShopBar: React.FC<VetBarProps> = (vet) => {
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, 'VetDetail'>>();

    const { latitude, longitude } = useSelector(
        (state: PosState) => state.userPositionSlice
    );

    const [distan, setDistan] = useState(10);

    const distance = () => {
        if (latitude && longitude) {
            const dist = calculateDistance({
                latitude1: latitude,
                longitude1: longitude,
                latitude2: vet.latitude,
                longitude2: vet.longitude,
            });
            setDistan(dist);
        }
    };

useEffect(() => {
  distance()  
}, [])

    const dispatch = useDispatch()
    const navigate = useNavigation<StackNavigationProp<ParamListBase>>()
    const handleOnPress = ()=>{
        const vetPos = {
            latitude: vet.latitude,
            longitude: vet.longitude
        }
        dispatch(setVetPosition(vetPos))
        navigate.navigate('Maps')
        setTimeout(() => {
            dispatch(setVetDeletePosition())
        }, 2000);
    }


    let shortName;
    if (vet?.name.length > 20) {
        shortName = vet?.name.slice(0, 20) + '...';
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
            onPress={() => navigation.navigate('PetShopView', {vet})}
            // onPress={handleOnPress}
        >
            <PetshopTabContainer>
                <LeftSideContainer>
                    <ContainerFotoPetshop>
                        <FotoPetshop
                            source={require('../../../assets/DefaultUserPic.png')}
                        />
                    </ContainerFotoPetshop>
                    <DataPetshopContainer>
                        <NombrePetshop>{shortName || vet?.name}</NombrePetshop>
                        <WrapperHorario>
                            <MaterialIcons
                                name="access-time"
                                size={24}
                                color="black"
                            />
                            <TextoHorario>Hoy, 10am a 18pm</TextoHorario>
                        </WrapperHorario>
                        <Rating>
                            <StarRating rating={4} />
                        </Rating>
                    </DataPetshopContainer>
                </LeftSideContainer>
                <RightSideContainer>
                    <UbicationWrapper>
                        <Feather name="arrow-right" size={30} color="black" onPress={handleOnPress} />
                        <Distance>{Math.floor(distan*10)/10}km</Distance>
                    </UbicationWrapper>
                </RightSideContainer>
            </PetshopTabContainer>
        </TouchableOpacity>
    );
};

export default PetShopBar;
