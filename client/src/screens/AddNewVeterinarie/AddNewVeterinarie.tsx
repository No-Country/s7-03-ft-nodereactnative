import { MainWrapperFormVet } from './addNewVeterinarie.styled';
import {
    ButtonPrimary,
    CamposRequeridos,
    CommonInput,
    GooglePlacesInput,
} from '../../components';
import { useForm } from 'react-hook-form';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import { useCreateVeterinarieMutation } from '../../reduxApp/services/veterinaries/vetServices';

const AddNewVeterinarie = () => {
    const [newVet] = useCreateVeterinarieMutation();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isLoading },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            latitude: '',
            longitude: '',
            phone: '',
            country: '',
        },
    });

    const onSubmit = async (data: any) => {
        const objData = {
            name: data.name,
            description: data.description,
            address: data.address.name,
            latitude: data.address.latitude,
            longitude: data.address.longitude,
            phone: data.phone,
            country: data.address.country,
        };
        const response = await newVet(objData);
        Popup.show({
            type: 'success',
            title: '¡Bien Hecho!',
            textBody: 'Ahora todos pueden ver tu veterinaria y contactarte ',
            buttonText: 'Tamam',
            callback: () => Popup.hide(),
        });
        reset();
    };

    return (
        <Root>
            <MainWrapperFormVet keyboardShouldPersistTaps='handled'>
                <CamposRequeridos>
                    *Todos los campos son requeridos
                </CamposRequeridos>
                <CommonInput
                    control={control}
                    name="name"
                    label="Nombre de la clínica veterinaria"
                    errors={errors && errors?.name?.message}
                    keyboardType="default"
                />
                <CommonInput
                    control={control}
                    name="description"
                    label="Descripción"
                    errors={errors && errors?.description?.message}
                    keyboardType="default"
                />
                <CommonInput
                    control={control}
                    name="phone"
                    label="Teléfono"
                    errors={errors && errors?.phone?.message}
                    keyboardType="phone-pad"
                />
                <GooglePlacesInput
                    control={control}
                    name="address"
                    label="Dirección"
                    errors={errors && errors?.address?.message}
                />
                <ButtonPrimary
                    onPress={handleSubmit(onSubmit)}
                    title="Crear tienda"
                    disabled={isLoading}
                />
            </MainWrapperFormVet>
        </Root>
    );
};

export default AddNewVeterinarie;
