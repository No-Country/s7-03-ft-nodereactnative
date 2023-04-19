import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, ParamListBase } from '@react-navigation/native';
import { VeterinariasScreenRouteProp } from '../../VeterinariasScreen/VeterinariasScreen';
import { useSelector } from 'react-redux';
import { Product } from '../../../reduxFeature/products/allProductsSlice';
import { ButtonPrimary } from '../../../components';
import { StackNavigationProp } from '@react-navigation/stack';

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

const Card = styled.View`
    width: 48%;
    height: 167px;
    padding: 5px;
    margin: 10px 0;
    overflow: hidden;
`;

const ProductImg = styled.Image`
    align-self: center;
    height: 80px;
`;

const Bold = styled.Text`
    font-size: 10px;
    font-weight: bold;
`;

const Text = styled.Text`
    font-size: 10px;
`;

const Title = styled.Text`
    align-self: center;
    margin: 15px;
    font-size: 20px;
`;

interface StateProd {
    allProductSlice: Product[];
}

const PetShopView = () => {
    const { params } = useRoute<VeterinariasScreenRouteProp>();
    const prods = useSelector((state: StateProd) => state.allProductSlice);
    console.log(prods);

    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

    const prodFilter = prods.filter(
        (prod) => prod.veterinaryId === params.vet.id
    );

    // const prods = prodSelector[0];

    return (
        <ContainerVeterinario
            source={require('../../../../assets/fondoHuellitas.png')}
        >
            <Scroll>
                <ButtonPrimary title='Agregar producto' onPress={()=>navigate('AddProduct')} />
                <Title>{params.vet.name}</Title>
                <Container>
                    {prodFilter.map((prod) => (
                        <Card key={prod.id}>
                            <Ionicons
                                name="add-circle-outline"
                                size={24}
                                color="black"
                                style={{ textAlign: 'right' }}
                            />
                            <ProductImg
                                source={require('../../../../assets/cama1.png')}
                            />
                            <Bold>{prod.name}</Bold>
                            <Bold>{prod.price}</Bold>
                            <Text>{prod.description}</Text>
                        </Card>
                    ))}
                </Container>
            </Scroll>
        </ContainerVeterinario>
    );
};

export default PetShopView;
