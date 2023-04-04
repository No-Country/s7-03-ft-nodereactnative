import { useSelector } from 'react-redux';
import {
    InputBuscador,
    CategoriaBox,
    TabBar,
    StoreTab,
    InputUbicacion,
} from '../../components';
import {
    ContainerCategorias,
    ContainerHome,
    ContainerMenuyUbicacion,
    ContainerOfertas,
    ContainerTitleOfertas,
    FilaCategorias,
    ImageOferta,
    ListaStore,
    SaludoUser,
    Title,
} from './home.styled';
import { AuthSlice } from '../../router/Router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    return (
        <ContainerHome>
            <ContainerMenuyUbicacion>
                <TabBar />
                <InputUbicacion />
            </ContainerMenuyUbicacion>
            <SaludoUser>Hola, Mery!</SaludoUser>
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
