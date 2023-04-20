import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../../screens/Auth/Register';
import { Login } from '../../screens/Auth/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: true,
                    title: 'Registro'
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
