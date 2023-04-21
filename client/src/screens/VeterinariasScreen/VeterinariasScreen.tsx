import { useRoute, RouteProp, useNavigation, ParamListBase } from '@react-navigation/native';
import { RootStackParamList } from '../../constants/types';
import {
    ContainerData,
    ContainerVeterinariaScreen,
    ContenedorHeader,
    ContenedorNombreVet,
    Icon,
    IconAndText,
    Pronombre,
    Propietaria,
    TextItem,
    WrapperItems,
    WrapperPropietaria,
} from './VeterinariasScreen.styled';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
} from '@expo/vector-icons';
import { View, Linking } from 'react-native';
import { colors } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { ButtonPrimary } from '../../components';

export interface VeterinariasScreenProps {
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

export type VeterinariasScreenRouteProp = RouteProp<
    RootStackParamList,
    'Veterinarias'
>;

const VeterinariasScreen: React.FC<VeterinariasScreenProps> = () => {
    const { params } = useRoute<VeterinariasScreenRouteProp>();
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
    const {vet} = params


    const nombrePropietaria = `${params?.vet?.user?.firstName} ${params?.vet?.user?.lastName}`;

    return (
        <ContainerVeterinariaScreen>
            <ContenedorHeader
                source={require('../../../assets/headerVeterinaria.webp')}
            >
                <ContenedorNombreVet>{params?.vet?.name}</ContenedorNombreVet>
            </ContenedorHeader>
            <ContainerData>
                <WrapperPropietaria>
                    <View>
                        <Ionicons
                            name="ios-bookmarks"
                            size={24}
                            color={colors.primary}
                        />
                    </View>
                    <View>
                        <Pronombre>Dr/a: </Pronombre>
                        <Propietaria>{nombrePropietaria}</Propietaria>
                    </View>
                </WrapperPropietaria>
                <WrapperItems>
                    <IconAndText
                        onPress={() =>
                            Linking.openURL(`tel:${params?.vet?.phone}`)
                        }
                    >
                        <Icon>
                            <MaterialCommunityIcons
                                name="phone-ring"
                                size={30}
                                color="#fff"
                            />
                        </Icon>
                        <TextItem>{params?.vet?.phone}</TextItem>
                    </IconAndText>

                    <IconAndText>
                        <Icon>
                            <FontAwesome5 name="store" size={24} color="#fff" />
                        </Icon>
                        <TextItem>{params?.vet?.address}</TextItem>
                    </IconAndText>
                    <IconAndText>
                        <Icon>
                            <MaterialCommunityIcons
                                name="text-long"
                                size={24}
                                color="#fff"
                            />
                        </Icon>
                        <TextItem>
                        {params?.vet?.description}
                        </TextItem>
                    </IconAndText>
                </WrapperItems>
                <ButtonPrimary title='Petshop' onPress={()=>navigate('PetShopView', {vet})} />
            </ContainerData>
        </ContainerVeterinariaScreen>
    );
};

export default VeterinariasScreen;
