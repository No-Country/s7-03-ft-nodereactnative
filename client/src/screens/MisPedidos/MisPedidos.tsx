import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    GoBack,
    HeaderContainer,
    MisPedidosContainer,
} from './MisPedidos.styled';

export interface MisPedidosProps {}

const MisPedidos: React.FC<MisPedidosProps> = () => {
    return (
        <MisPedidosContainer>
            <HeaderContainer>
                <Text>MisPedidos</Text>
            </HeaderContainer>
        </MisPedidosContainer>
    );
};

export default MisPedidos;
