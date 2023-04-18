import { View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import {
    CustomTextInput,
    Error,
    Label,
    WrapperCommonInput,
} from './commonInput.styled';

export interface CommonInputProps {
    control: any;
    name: string;
    label: string;
    errors: any;
    keyboardType: "default" | "numeric" | "email-address" | "phone-pad";
}   

const CommonInput: React.FC<CommonInputProps> = ({ control, name, label, errors, keyboardType = "default" }) => {
    
    return (
        <View>
            <Controller
                control={control}
                name={name}
				rules={{ required: {
                    value: true,
                    message: 'Este campo es requerido.'
                } }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <WrapperCommonInput>
                        <Label>{label}</Label>
                        <CustomTextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType={keyboardType}
                        />
                    </WrapperCommonInput>
                )}
            />
            {errors &&
                <Error>{errors}</Error>}
        </View>
    );
};

export default CommonInput;
