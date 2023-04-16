import { View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import {
    CustomTextInput,
    Label,
    WrapperCommonInput,
} from './commonInput.styled';

export interface CommonInputProps {
    control: any;
    name: string;
    label: string;
}

const CommonInput: React.FC<CommonInputProps> = ({ control, name, label }) => {
    return (
        <View>
            <Controller
                control={control}
                name={name}
				rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <WrapperCommonInput>
                        <Label>{label}</Label>
                        <CustomTextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    </WrapperCommonInput>
                )}
            />
        </View>
    );
};

export default CommonInput;
