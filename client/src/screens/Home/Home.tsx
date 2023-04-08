import { useSelector } from 'react-redux';
import {
    InputBuscador,
    CategoriaBox,
    TabBar,
    StoreTab,
} from '../../components';
import {
    ContainerCategorias,
    ContainerHome,
    ContainerOfertas,
    ContainerTitleOfertas,
    FilaCategorias,
    ImageOferta,
    ListaStore,
    SaludoUser,
    Title,
} from './home.styled';
import { AuthSlice } from '../../router/Router';
import { ContainerMenuyUbicacion } from './home.styled';
import { InputUbicacion } from '../../components/InputUbicacion';
import { ButtonUbication } from '../../components/buttons/buttonUbication/ButtonUbication';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ContainerHome>
            <ContainerMenuyUbicacion>
                <TabBar />
                {/* <InputUbicacion /> */}
                <ButtonUbication onPress={()=>{navigate('Maps')}} />
            </ContainerMenuyUbicacion>
            <SaludoUser>Hola, {infoUser?.user?.firstName}!</SaludoUser>
            <InputBuscador />
            <ContainerCategorias>
                <ContainerTitleOfertas>
                    <Title>Categorías</Title>
                </ContainerTitleOfertas>
                <FilaCategorias horizontal>
                    <CategoriaBox text="Alimentos" />
                    <CategoriaBox text="Veterinarias" />
                    <CategoriaBox text="Tiendas cercanas" />
                    <CategoriaBox text="Juguetes" />
                    <CategoriaBox text="Cuidadores" />
                    <CategoriaBox text="Alimentos" />
                </FilaCategorias>
            </ContainerCategorias>
            <ContainerOfertas>
                <Title>Las mejores ofertas</Title>
                <ImageOferta
                    source={require('../../../assets/ImgOfertas/Oferta.webp')}
                />
            </ContainerOfertas>
            <ListaStore>
                <StoreTab />
                <StoreTab />
                <StoreTab />
                <StoreTab />
                <StoreTab />
                <StoreTab />
            </ListaStore>
        </ContainerHome>
    );
};

export default Home;
