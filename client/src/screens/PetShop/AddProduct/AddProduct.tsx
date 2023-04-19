import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as ImagePicker from 'expo-image-picker';
import { ButtonPrimary } from '../../../components';
import { useState } from 'react';
import { Image } from 'react-native';
import { useCreateProductMutation } from '../../../reduxApp/services/products/products';

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
    productImage: ImageUrl[];
}

const Input = styled.TextInput<PropsInput>`
    padding: 10px;
    background-color: white;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
    margin-bottom: 5px;
    border-color: ${(props) => (props.errors ? 'red' : 'black')};
`;

const InputArea = styled.TextInput<PropsInput>`
    padding: 10px;
    background-color: white;
    height: 100px;
    border-radius: 4px;
    border-width: 1px;
    width: 90%;
    margin-bottom: 5px;
    border-color: ${(props) => (props.errors ? 'red' : 'black')};
`;

const Container = styled.ImageBackground`
    flex: 1;
    object-fit: 'cover';
    align-items: center;
`;

const Label = styled.Text`
margin: 5px auto 5px 30px;
`

const ImagePic = styled.Image`
    height: 150px;
    width: 150px;
    resize: "contain";
`



const AddProduct = () => {
    const [createProduct, {isLoading}] = useCreateProductMutation()
    const [selectedImage, setSelectedImage] = useState(null);

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
        console.log(data);
        
        const resp: any = await createProduct({
            name,
            description,
            price,
            quantity,
            productCategoryId: "9c9df076-b54d-47a5-b9d6-e79acb3be2aa",
            veterinaryId: "75e516d2-6915-4b5d-980f-b62a48cd45d2",
            'product-image': selectedImage
        });
        console.log(resp);
        if (resp.error) console.log(resp.error.data.message)
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
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to camara roll is required");
          return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
          });
        console.log(pickerResult)
    
        // if (pickerResult.canceled === true) {
        //   return;
        // }    
        setSelectedImage(pickerResult.assets[0].uri );
        console.log('sel',selectedImage);
        
      };

    return (
        <Container source={require('../../../../assets/fondoHuellitas.png')}>
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
            <Label>Precio</Label>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            
                            keyboardType="numeric"
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
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
                            value={value}
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
                        multiline = {true}
numberOfLines = {5}
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
                {selectedImage && <ImagePic
          source={{
            uri: selectedImage
          }}
        />}
                <ButtonPrimary title='Agregar imagen' onPress={pickImage}/>
                <ButtonPrimary title='Aceptar' onPress={handleSubmit(onSubmit)}/>
        </Container>
    );
};

export default AddProduct;
