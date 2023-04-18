import { View } from 'react-native';
import { Input, Label, ViewContainer, ViewMenu } from './Settings.styled';
import { Controller, useForm } from 'react-hook-form';
import { ButtonPrimary, CommonInput } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Alerts from '../../../components/Alerts/Alerts';
import { ButtonSecondary } from '../../../components/buttons/ButtonSecondary';
import useSettings from '../../../hooks/useSettings';

const Settings = () => {
    const {
        control,
        handleSubmit,
        onSubmit,
        handleDelete,
        alertShow,
        mode,
        handleCancel,
        confirmEdit,
        confirmDelete,
        errors
    } = useSettings();

    return (
        <ViewMenu>
            <KeyboardAwareScrollView
                style={{
                    margin: 0,
                    padding: 0,
                    width: '100%',
                }}
            >
                <ViewContainer>
                    <CommonInput
                        control={control}
                        errors={errors?.firstName?.message}
                        keyboardType="default"
                        label="Nombre"
                        name="firstName"
                    />

                    <CommonInput
                        control={control}
                        errors={errors?.lastName?.message}
                        keyboardType="default"
                        label="Apellido"
                        name="lastName"
                    />

                    <CommonInput
                        control={control}
                        errors={errors?.firstName?.message}
                        keyboardType="phone-pad"
                        label="Prefijo internacional (ej: +54)"
                        name="codePhone"
                    />

                    <CommonInput
                        control={control}
                        errors={errors?.phone?.message}
                        keyboardType="phone-pad"
                        label="Número de teléfono"
                        name="phone"
                    />

                    <CommonInput
                        control={control}
                        errors={errors?.country?.message}
                        keyboardType="default"
                        label="País"
                        name="country"
                    />

                    <CommonInput
                        control={control}
                        errors={errors?.email?.message}
                        keyboardType="email-address"
                        label="E-mail"
                        name="email"
                    />
                </ViewContainer>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <ButtonPrimary
                        onPress={handleSubmit(onSubmit)}
                        title="Editar Campos"
                    />
                    <ButtonSecondary
                        color={true}
                        onPress={handleDelete}
                        title="Eliminar perfil"
                    />
                </View>
            </KeyboardAwareScrollView>
            <Toast />
            {alertShow && (
                <Alerts
                    title={
                        mode === 'edit'
                            ? 'Editar Perfil'
                            : mode === 'delete'
                            ? 'Eliminar Perfil'
                            : ''
                    }
                    cancelText="Cancelar"
                    confirmText="Confirmar accion"
                    message={
                        mode === 'edit'
                            ? '¿Estas seguro de editar tu perfil?'
                            : mode === 'delete'
                            ? 'Estas a punto de eliminar tu cuenta, esta accion es irreversible!'
                            : ''
                    }
                    alertShow={alertShow}
                    onCancel={handleCancel}
                    action={
                        mode === 'edit'
                            ? confirmEdit
                            : mode === 'delete'
                            ? confirmDelete
                            : () => {}
                    }
                />
            )}
        </ViewMenu>
    );
};

export default Settings;
