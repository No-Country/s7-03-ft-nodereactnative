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
import { useGetUserQuery } from '../../reduxApp/services/users/users';
import { useEffect } from 'react';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const { data, isFetching } = useGetUserQuery(infoUser.user.id);

    console.log('data de la query getUser', data);

    return (
        <ContainerHome>
            <TabBar />
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
