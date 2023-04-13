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
import { useDispatch } from 'react-redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import {
    setVetDeletePosition,
    setVetPosition,
} from '../../reduxFeature/veterinaries/vetPositionSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';
import { StarRating } from '../StarRating';
import { MaterialIcons, Feather } from '@expo/vector-icons';

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
            onPress={() => navigation.navigate('VetDetail', { vet })}
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
                        <Feather name="arrow-right" size={30} color="black" />
                        <Distance>9km</Distance>
                    </UbicationWrapper>
                </RightSideContainer>
            </PetshopTabContainer>
        </TouchableOpacity>
    );
};

export default PetShopBar;
