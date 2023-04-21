import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as ImagePicker from 'expo-image-picker';
import { ButtonPrimary } from '../../../components';
import { useState } from 'react';
import { Image } from 'react-native';
import { useCreateProductMutation } from '../../../reduxApp/services/products/products';
import { useSelector } from 'react-redux';
import { ProductCategory } from '../../../reduxFeature/products/productsCategorySlice';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';


interface PropsInput {
    errors?: boolean;
}

interface ImageUrl {
    imageUrl: string;
}

interface NewPorduct {
    name: string;
    description: string;
    price: number;
    quantity: number;
    productCategoryId: string;
    veterinaryId: string;
    productImage: any;
}

const Input = styled.TextInput<PropsInput>`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border-color: ${(props) => (props.errors ? 'red' : 'black')};
`;

const PickView = styled.View`
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border-color: black;
    overflow: hidden;
`;

const Pick = styled(Picker)`
    margin: -9px 0 0;
`;

const InputArea = styled.TextInput<PropsInput>`
    padding: 10px;
    background-color: white;
    height: 100px;
    border-radius: 4px;
    border-width: 1px;
    width: 100%;
    margin-bottom: 5px;
    border-color: ${(props) => (props.errors ? 'red' : 'black')};
`;

const Container = styled.ImageBackground`
    flex: 1;
    padding: 0 20px;
`;

const Label = styled.Text`
    margin: 5px auto 5px 30px;
`;

const ImagePic = styled.Image`
    height: 150px;
    width: 150px;
    align-self: center;
    resize: 'contain';
    margin: 10px;
`;

const Scroll = styled.ScrollView`
    align-self: center;
    width: 100%;
`;

interface StateProd {
    productCategorySlice: ProductCategory[];
}

const AddProduct = () => {
    const { params } = useRoute<any>();
    const [createProduct, { isLoading }] = useCreateProductMutation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categ = useSelector((state: StateProd) => state.productCategorySlice);

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty, isValid },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            quantity: 0,
        },
        mode: 'onTouched',
    });

    const onSubmit = async (data: NewPorduct) => {
        const { name, description, price, quantity } = data;
        console.log(selectedImage);

        const resp: any = await createProduct({
            name,
            description,
            price,
            quantity,
            productCategoryId: selectedCategory,
            veterinaryId: params.id,
            'product-image': selectedImage,
        });
        console.log(resp);
        if (resp.error) console.log(resp.error.data.message);
        if (!resp.error) {
            Toast.show({
                type: 'success',
                text1: 'Cuenta creada con éxito, ya puedes loguearte',
            });
        }
        if (resp.error?.data.message === 'Email Already Exists') {
            Toast.show({
                type: 'error',
                text1: 'Ya existe una cuenta con este Email!',
            });
        }
    };

    const pickImage = async () => {
        const permissionResult =
            await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to camara roll is required');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(pickerResult);

        // if (pickerResult.canceled === true) {
        //   return;
        // }
        if (pickerResult?.assets) {
            setSelectedImage(pickerResult.assets[0]);
            console.log('sel', selectedImage);
        }
    };

    return (
        <Container source={require('../../../../assets/fondoHuellitas.png')}>
            <Scroll>
                <Label>Nombre del producto</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={errors.name?.type === 'required'}
                        />
                    )}
                    name="name"
                    rules={{ required: true }}
                />
                <Label>Categoría</Label>
                <PickView>
                    <Pick
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) => {
                            if (itemValue !== 0) setSelectedCategory(itemValue);
                        }}
                    >
                        <Picker.Item label="Slecciona una opción" value={0} />
                        {categ.map((cate) => (
                            <Picker.Item label={cate.name} value={cate.id} />
                        ))}
                    </Pick>
                </PickView>
                <Label>Precio</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="numeric"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value.toString()}
                            errors={errors.price?.type === 'required'}
                        />
                    )}
                    name="price"
                    rules={{ required: true }}
                />
                <Label>Cantidad</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            keyboardType="numeric"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value.toString()}
                            errors={errors.quantity?.type === 'required'}
                        />
                    )}
                    name="quantity"
                    rules={{ required: true }}
                />
                <Label>Descripción</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputArea
                            multiline={true}
                            numberOfLines={5}
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            errors={errors.description?.type === 'required'}
                        />
                    )}
                    name="description"
                    rules={{ required: true }}
                />
                {selectedImage && (
                    <ImagePic
                        source={{
                            uri: selectedImage.uri,
                        }}
                    />
                )}
                <ButtonPrimary title="Agregar imagen" onPress={pickImage} />
                <ButtonPrimary
                disabled={!isDirty || !isValid || selectedCategory===null}
                    title="Aceptar"
                    onPress={handleSubmit(onSubmit)}
                />
            </Scroll>
        </Container>
    );
};

export default AddProduct;
