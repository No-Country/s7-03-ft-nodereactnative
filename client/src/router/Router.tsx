import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { AuthStack } from './AuthStack';
import { DrawerNavigation } from './DrawerNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../reduxApp/services/auth/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCredentials } from '../reduxFeature/auth/authSlice';
import Maps from '../screens/Maps/Maps';
import { Cuidadores } from '../screens/Cuidadores';
import { colors } from '../constants';
import PetShop from '../screens/PetShop/PetShop';
import AddNewVeterinarie from '../screens/AddNewVeterinarie/AddNewVeterinarie';
import { VetRoute } from './VetRoute';
import { PetShopList } from '../screens';

export interface AuthSlice {
    authSlice: {
        token: string;
        user: User;
    };
}

const Stack = createStackNavigator();

const LoggedStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Cuidadores"
                component={Cuidadores}
                options={{
                    headerTintColor: colors.primary,
                }}
            />
            <Stack.Screen
                name="NewVeterinarie"
                component={AddNewVeterinarie}
                options={{
                    headerTintColor: colors.primary,
                }}
            />
            <Stack.Screen
                name="PetShop"
                component={PetShopList}
                options={{
                    title: 'PetShops',
                    headerTintColor: colors.primary,
                }}
            />
            <Stack.Screen
                name="Maps"
                component={Maps}
                options={{
                    headerShown: true,
                    title: 'Mapa',
                }}
            />
            <Stack.Screen
                name="Veterinarias"
                component={VetRoute}
                options={{
                    headerShown: false,
                    headerTintColor: colors.primary,
                }}
            />
        </Stack.Navigator>
    );
};

const NoLoggedStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
    );
};

const Router = () => {
    const dispatch = useDispatch();
    const infoUser = useSelector((state: AuthSlice) => state.authSlice);

    const fetchCurrentUser = async () => {
        const currentUser = await AsyncStorage.getItem('token');
        if (currentUser) {
            const parsedData = JSON.parse(currentUser);
            dispatch(setCredentials(parsedData));
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, [dispatch]);

    return (
        <NavigationContainer>
            {infoUser?.token ? <LoggedStack /> : <NoLoggedStack />}
        </NavigationContainer>
    );
};

export default Router;
