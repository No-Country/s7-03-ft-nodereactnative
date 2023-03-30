import {
    DataStoreWrapper,
    FavoriteIcon,
    LogoStore,
    MainData,
    OtherData,
    SecondaryData,
    StoreName,
    StoreRatingNumber,
    StoreRatingWrapper,
    TabContainer,
} from './storeTab.styled';
import { AntDesign, Entypo } from '@expo/vector-icons';

export interface StoreTabProps {}

const StoreTab: React.FC<StoreTabProps> = () => {
    return (
        <TabContainer>
            <LogoStore
                source={require('../../../assets/StoreLogos/LogoLaMascotera.png')}
            />
            <DataStoreWrapper>
                <MainData>
                    <StoreName>La Mascotera</StoreName>
                    <OtherData>Veterinaria - Pet Shop</OtherData>
                </MainData>
                <SecondaryData>
                    <StoreRatingWrapper>
                        <AntDesign name="star" size={15} color="black" />
                        <StoreRatingNumber>5.0</StoreRatingNumber>
                    </StoreRatingWrapper>
                    <FavoriteIcon>
                        <Entypo name="heart-outlined" size={24} color="black" />
                    </FavoriteIcon>
                </SecondaryData>
            </DataStoreWrapper>
        </TabContainer>
    );
};

export default StoreTab;
