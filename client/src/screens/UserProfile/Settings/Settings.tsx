import { View } from 'react-native';
import { Input, Label, ViewContainer, ViewMenu } from './Settings.styled';
import { Controller, useForm } from 'react-hook-form';
import { ButtonPrimary } from '../../../components';
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
                    <Label>Nombre</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="firstName"
                        rules={{ required: true }}
                    />
                    <Label>Apellido</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="lastName"
                        rules={{ required: true }}
                    />
                    <Label>Codigo de Pais(Celular)</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="codePhone"
                        rules={{ required: true }}
                    />
                    <Label>Celular</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="phone"
                        rules={{ required: true }}
                    />
                    <Label>Pais</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="country"
                        rules={{ required: true }}
                    />
                    <Label>Email</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                editable={false}
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: false }}
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
