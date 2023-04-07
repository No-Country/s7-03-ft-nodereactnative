import { useSelector } from 'react-redux';
import {
    InputBuscador,
    CategoriaBox,
    TabBar,
    StoreTab,
} from '../../components';
import {
    ContainerBuscadoryFiltro,
    ContainerCategorias,
    ContainerHome,
    ContainerOfertas,
    ContainerSaludoyBuscador,
    ContainerTitleOfertas,
    FilaCategorias,
    Google,
    ImageOferta,
    ListaStore,
    SaludoUser,
    Title,
    TouchableIcon,
} from './home.styled';
import { AuthSlice } from '../../router/Router';
import { ContainerMenuyUbicacion } from './home.styled';
import { InputUbicacion } from '../../components/InputUbicacion';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    return (
        <ContainerHome keyboardShouldPersistTaps="handled">
            <ContainerMenuyUbicacion>
                <SafeAreaView>

                <TabBar />
                </SafeAreaView>

                <InputUbicacion />
            </ContainerMenuyUbicacion>
            <ContainerSaludoyBuscador>
                <SaludoUser>Hola, {infoUser?.user?.firstName}!</SaludoUser>
                <ContainerBuscadoryFiltro>
                    <InputBuscador />
                    <TouchableIcon>
                        <FontAwesome5
                            name="sliders-h"
                            size={20}
                            color="black"
                        />
                    </TouchableIcon>
                </ContainerBuscadoryFiltro>
            </ContainerSaludoyBuscador>

            <ContainerCategorias>
                <ContainerTitleOfertas>
                    <Title>Categorías</Title>
                </ContainerTitleOfertas>
                <FilaCategorias horizontal>
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/veterinarios.png')}
                        color="#8eb6f8"
                        text="Veterinarias"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/cuidadores.png')}
                        color="#bb92ff"
                        text="Cuidadores"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/alimentos.png')}
                        color="#85cb98"
                        text="Alimentos"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/juguetes.png')}
                        color="#ffda66"
                        text="Juguetes"
                    />
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
