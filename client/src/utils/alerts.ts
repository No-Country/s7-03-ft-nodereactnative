import Toast from 'react-native-toast-message';

export const alertToast = (type: string, text1: string, text2: string) => {
    Toast.show({
        type,
        text1,
        text2,
    });
};
