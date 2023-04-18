import { View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import {
    CustomTextInput,
    Error,
    Label,
    WrapperProfileInput,
} from './profileInput.styled';

export interface ProfileInput {
    control: any;
    name: string;
    label: string;
    errors: any;
    keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const ProfileInput: React.FC<ProfileInput> = ({
    control,
    name,
    label,
    errors,
    keyboardType = 'default',
}) => {
    return (
        <View>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: {
                        value: true,
                        message: 'Este campo es requerido.',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <WrapperProfileInput>
                        <Label>{label}</Label>
                        <CustomTextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType={keyboardType}
                        />
                    </WrapperProfileInput>
                )}
            />
            {errors && <Error>{errors}</Error>}
        </View>
    );
};

export default ProfileInput;
