import { Text } from 'react-native';
import { TabBar } from '../../components/TabBar';
import { ContainerHome } from './home.styled';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <ContainerHome>
            <TabBar />
            <Text>hola</Text>
        </ContainerHome>
    );
};

export default Home;
