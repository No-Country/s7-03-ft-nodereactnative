import { TouchableOpacity } from 'react-native';
import { ContainerFotoVet, DataVetContainer, FotoVet, NombreVeterinaria, Rating, ShortDescription, VetTabContainer } from './VeterinariasBar.styled';
import { FontAwesome } from '@expo/vector-icons';

export interface StoreTabProps {
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

const VeterinariasBar: React.FC<StoreTabProps> = ({...vet}) => {
    const fullStars = Math.floor(3.4);

    const halfStars = Math.ceil(3.4 - fullStars);

    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesome key={i} name="star" size={15} color="black" />);
    }

    for (let i = 0; i < halfStars; i++) {
        stars.push(
            <FontAwesome
                key={fullStars + i}
                name="star-half-empty"
                size={15}
                color="black"
            />
        );
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <FontAwesome
                key={fullStars + halfStars + i}
                name="star-o"
                size={15}
                color="black"
            />
        );
    }

    const shortDesc = vet?.description.slice(0, 40) + '...';

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
        >
            <VetTabContainer>
                <ContainerFotoVet>
                    <FotoVet source={require('../../../assets/DefaultUserPic.png')}/>
                </ContainerFotoVet>
                <DataVetContainer>
                       <NombreVeterinaria>{vet?.name}</NombreVeterinaria> 
                       <ShortDescription>{shortDesc}</ShortDescription>
                       <Rating>
                       {stars.map((star) => star)}
                       </Rating>
                </DataVetContainer>
            </VetTabContainer>
        </TouchableOpacity>
    );
};

export default VeterinariasBar;
