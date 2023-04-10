import { View } from 'react-native';
import {
    BotonVerPerfil,
    ContactoCuidadorContainer,
    ContainerFotoCuidador,
    CuidadorName,
    CuidadorRatingWrapper,
    CuidadorTabContainer,
    DataCuidadorContainer,
    FotoCuidador,
    MainDataCuidador,
    SecondaryDataCuidador,
    SloganCuidador,
    WhastappLogo,
} from './CuidadorBar.styled';
import { FontAwesome } from '@expo/vector-icons';

export interface StoreTabProps {
    nombre: string;
    rating: number;
    slogan: string;
}

const CuidadorBar: React.FC<StoreTabProps> = ({ nombre, rating, slogan }) => {
    const fullStars = Math.floor(rating);

    const halfStars = Math.ceil(rating - fullStars);

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

    return (
        <View
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
            }}
        >
            <CuidadorTabContainer>
                <ContainerFotoCuidador>
                    <FotoCuidador
                        source={require('../../../assets/paseadora.jpg')}
                    />
                </ContainerFotoCuidador>
                <DataCuidadorContainer>
                    <MainDataCuidador>
                        <CuidadorName>{nombre}</CuidadorName>
                        <SloganCuidador>{slogan}</SloganCuidador>
                        <ContactoCuidadorContainer>
                            <WhastappLogo
                                source={require('../../../assets/WhatsappLogo.webp')}
                            />
                            <BotonVerPerfil>Ir a perfil</BotonVerPerfil>
                        </ContactoCuidadorContainer>
                    </MainDataCuidador>
                    <SecondaryDataCuidador>
                        <CuidadorRatingWrapper>
                            {stars.map((star) => star)}
                        </CuidadorRatingWrapper>
                    </SecondaryDataCuidador>
                </DataCuidadorContainer>
            </CuidadorTabContainer>
        </View>
    );
};

export default CuidadorBar;
