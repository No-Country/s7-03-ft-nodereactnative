import { useDispatch, useSelector } from 'react-redux';
import {
    InputBuscador,
    CategoriaBox,
    TabBar,
} from '../../components';
import {
    ContainerBuscadoryFiltro,
    ContainerCategorias,
    ContainerHome,
    ContainerOfertas,
    ContainerSaludoyBuscador,
    ContainerTitleOfertas,
    FilaCategorias,
    ImageOferta,
    SaludoUser,
    Title,
    TouchableIcon,
} from './home.styled';
import { AuthSlice } from '../../router/Router';
import { ContainerMenuyUbicacion } from './home.styled';
import { ButtonUbication } from '../../components/buttons/buttonUbication/ButtonUbication';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { firstLetterMayus } from '../../utils/functions';
import { alertToast } from '../../utils/alerts';
import Toast from 'react-native-toast-message';
import { StatusBar, Text } from 'react-native';
import { useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { colors } from '../../constants';
import { useGetProductsQuery } from '../../reduxApp/services/products/products';
import { setAllProduct } from '../../reduxFeature/products/allProductsSlice';
import { useGetProductsCategoryQuery } from '../../reduxApp/services/product-categories/productCategories';
import { setProductCategory } from '../../reduxFeature/products/productsCategorySlice';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
    const getProducts = useGetProductsQuery('');
    const getCategories = useGetProductsCategoryQuery('')
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        if(getProducts.data){
            dispatch(setAllProduct(getProducts.data?.results.results))
        }
    }, [getProducts.data])
   
    useEffect(() => {
        if(getCategories.data){
            dispatch(setProductCategory(getCategories.data?.results.results))            
        }
    }, [getCategories.data])
    

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
        <ContainerHome keyboardShouldPersistTaps="handled">                     
            <StatusBar backgroundColor={colors.primaryLight} />
            <ContainerMenuyUbicacion>
                <SafeAreaView>
                    <TabBar />
                    {/* <InputUbicacion /> */}
                    <Text>Ver veterinarias cercanas</Text>
                    <ButtonUbication
                        onPress={() => {
                            navigate('Maps');
                        }}
                    />
                </SafeAreaView>
            </ContainerMenuyUbicacion>
            <ContainerSaludoyBuscador>
                <SaludoUser>
                    Hola, {firstLetterMayus(infoUser?.user?.firstName)}!
                </SaludoUser>
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
                        to="Veterinarias"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/cuidadores.png')}
                        color="#bb92ff"
                        text="Cuidadores"
                        to="Cuidadores"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/alimentos.png')}
                        color="#85cb98"
                        text="Alimentos"
                        to="Cuidadores"
                    />
                    <CategoriaBox
                        img={require('../../../assets/categoriasImg/juguetes.png')}
                        color="#ffda66"
                        text="Pet Shop"
                        to="PetShop"
                    />
                </FilaCategorias>
            </ContainerCategorias>
            <ContainerOfertas>
                <Title>Las mejores ofertas</Title>
                <ImageOferta
                    source={require('../../../assets/ImgOfertas/Oferta.webp')}
                />
            </ContainerOfertas>
            <Toast />
        </ContainerHome>
    );
};

export default Home;
