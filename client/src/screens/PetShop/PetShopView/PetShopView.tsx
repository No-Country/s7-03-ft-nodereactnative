import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const ContainerVeterinario = styled.ImageBackground`
    flex: 1;
    object-fit: 'cover';
`;

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

const PetShopView = () => {
    return (
        <ContainerVeterinario
            source={require('../../../../assets/fondoHuellitas.png')}
        >
            <Container>
                <Card>
                    <Ionicons
                        name="add-circle-outline"
                        size={24}
                        color="black"
                        style={{ textAlign: 'right' }}
                    />
                    <ProductImg
                        source={require('../../../../assets/cama1.png')}
                    />
                    <Bold>$7.500</Bold>
                    <Text>Cama para perros, brow lider original.</Text>
                </Card>
                <Card>
                    <Ionicons
                        name="add-circle-outline"
                        size={24}
                        color="black"
                        style={{ textAlign: 'right' }}
                    />
                    <ProductImg
                        source={require('../../../../assets/cama1.png')}
                    />
                    <Bold>$7.500</Bold>
                    <Text>Cama para perros, brow lider original.</Text>
                </Card>
                <Card>
                    <Ionicons
                        name="add-circle-outline"
                        size={24}
                        color="black"
                        style={{ textAlign: 'right' }}
                    />
                    <ProductImg
                        source={require('../../../../assets/cama1.png')}
                    />
                    <Bold>$7.500</Bold>
                    <Text>Cama para perros, brow lider original.</Text>
                </Card>
            </Container>
        </ContainerVeterinario>
    );
};

export default PetShopView;
