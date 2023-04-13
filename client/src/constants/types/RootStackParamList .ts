import { VetBarProps } from '../../components/VeterinariasBar/VeterinariasBar';
import { VeterinariasScreenProps } from '../../screens/VeterinariasScreen/VeterinariasScreen';

export type RootStackParamList = {
    Cuidadores: undefined;
    Veterinarias: { vet: VeterinariasScreenProps };
    VetDetail: { vet: VetBarProps };
    Alimenos: undefined;
    PetShop: undefined;
    // add more screen names and their params here as needed
};
