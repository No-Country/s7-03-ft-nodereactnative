import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import { ButtonSecondaryEmpty } from '../../components/buttons/ButtonSecondaryEmpty';

interface DataRegister {
    email: string;
    password: string;
    password2: string;
}

const Register = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            password2: '',
        },
    });
    const onSubmit = (data:DataRegister) => {
        console.log(data);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        keyboardType="email-address"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="email"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Password</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="password"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Repeat Password</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="password2"
                rules={{ required: true }}
            />

            <ButtonPrimary
                onPress={handleSubmit(onSubmit)}
                title="Registrarse"
            />

            <ButtonSecondaryEmpty
                onPress={handleSubmit(onSubmit)}
                title="Ir al Login"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        color: 'black',
        marginTop: 15,
        marginLeft: 15,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#ec5990',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
    },
});

export default Register;
