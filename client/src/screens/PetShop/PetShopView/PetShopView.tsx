import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import {
    useNavigation,
    useRoute,
    ParamListBase,
} from '@react-navigation/native';
import { VeterinariasScreenRouteProp } from '../../VeterinariasScreen/VeterinariasScreen';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../reduxFeature/products/allProductsSlice';
import { ButtonPrimary } from '../../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { colors } from '../../../constants';
import { setCart } from '../../../reduxFeature/products/cartSlice';

const ContainerVeterinario = styled.ImageBackground`
    flex: 1;
    object-fit: 'cover';
`;

const Scroll = styled.ScrollView``;

const Container = styled.View`
    margin: 20px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Card = styled.TouchableOpacity`
    width: 48%;
    height: 167px;
    padding: 5px;
    margin: 10px 0;
    overflow: hidden;
`;

const ProductImg = styled.Image`
    align-self: center;
    height: 80px;
    width: 100px;
`;

const ProductImgMod = styled.Image`
    align-self: center;
    height: 170px;
    width: 80%;
    margin-bottom: 20px;
    object-fit: contain;
`;

const Bold = styled.Text`
    font-size: 10px;
    font-weight: bold;
`;

const Text = styled.Text`
    font-size: 10px;
`;

const BoldMod = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const TextMod = styled.Text`
    font-size: 15px;
    width: 170px;
`;

const Title = styled.Text`
    align-self: center;
    margin: 15px;
    font-size: 20px;
`;

const PopUp = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #00000050;
`;

const PopUpInt = styled.View`
    width: 90%;
    height: 55%;
`;

const Touch = styled.TouchableOpacity`
    margin: 10px 10px 10px auto;
`;

const RowView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

const ButtonCart = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: ${colors.backgroundLightViolet};
    border-radius: 8;
    justify-content: center;
    padding: 3px;
`;

interface StateProd {
    allProductSlice: Product[];
}

const PetShopView = () => {
    const dispatch = useDispatch()
    const { params } = useRoute<VeterinariasScreenRouteProp>();
    const prods = useSelector((state: StateProd) => state.allProductSlice);

    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

    const prodFilter = prods.filter(
        (prod) => prod.veterinaryId === params.vet.id
    );

    // const prods = prodSelector[0];

    const [modalVisible, setModalVisible] = useState(false);
    const [thisProd, setThisProd] = useState<Product | null>(null);

useEffect(() => {
 console.log('prod', thisProd);
 
}, [thisProd])


    return (
        <ContainerVeterinario
            source={require('../../../../assets/fondoHuellitas.png')}
        >
            <Scroll>
                <TouchableOpacity
                    onPress={() => navigate('Inicio')}
                    style={{marginLeft:'auto'}}
                ><Text style={{fontSize:15}}>Ir al Home</Text></TouchableOpacity>
                <Title>{params.vet.name}</Title>
                <Container>
                    {prodFilter.map((prod) => (
                        <Card
                            key={prod.id}
                            onPress={() => {
                                setModalVisible(true);
                                setThisProd(prod);
                            }}
                        >
                            {/* <Ionicons
                                name="add-circle-outline"
                                size={24}
                                color="black"
                                style={{ textAlign: 'right' }}
                            /> */}
                            <ProductImg
                                source={prod?.productImage[0].imageUrl
                                    ? {uri: prod.productImage[0].imageUrl}
                                    : require('../../../../assets/vetImage.png')}
                            />
                            <Bold>{prod.name}</Bold>
                            <Bold>{prod.price}</Bold>
                            <Text>{prod.description}</Text>
                        </Card>
                    ))}
                </Container>
            </Scroll>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <PopUp>
                    <PopUpInt
                        style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 5,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}
                    >
                        <Touch onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons
                                name="close-circle-outline"
                                size={34}
                                color="black"
                            />
                        </Touch>

                        <ProductImgMod
                            source={
                                thisProd?.productImage[0].imageUrl
                                    ? {uri:thisProd?.productImage[0].imageUrl}
                                    : require('../../../../assets/vetImage.png')
                            }
                        />
                        <RowView>
                            <View>
                                <BoldMod>{thisProd?.name}</BoldMod>
                                <BoldMod>$ {thisProd?.price}</BoldMod>
                                <TextMod>{thisProd?.description}</TextMod>
                            </View>
                            <ButtonCart
                            onPress={()=>dispatch(setCart(thisProd))}>
                                <Ionicons
                                    name="cart-outline"
                                    size={40}
                                    color="black"
                                />
                            </ButtonCart>
                        </RowView>
                    </PopUpInt>
                </PopUp>
            </Modal>
        </ContainerVeterinario>
    );
};

export default PetShopView;
