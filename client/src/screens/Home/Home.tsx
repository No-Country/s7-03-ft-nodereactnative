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
import { firstLetterMayus } from '../../utils/functions';
import { alertToast } from '../../utils/alerts';
import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    useEffect(() => {
        <Text>
            {infoUser?.token && (
                <>
                    {alertToast(
                        'success',
                        'Sesion iniciada',
                        'Se inicio sesion correctamente!'
                    )}
                </>
            )}
        </Text>;
    }, []);

    return (
        <ContainerHome>
            <ContainerMenuyUbicacion>
                <TabBar />
                <InputUbicacion />
            </ContainerMenuyUbicacion>
            <SaludoUser>
                Hola, {firstLetterMayus(infoUser?.user?.firstName)}!
            </SaludoUser>
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
            <Toast />
        </ContainerHome>
    );
};

export default Home;
