import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './AuthStack';
import { TabNavigator } from './TabNavigator';
import { DrawerNavigation } from './DrawerNavigation';

const Stack = createStackNavigator();

const LoggedStack = () => {
    return <DrawerNavigation />;
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
    let isLogged: boolean = true;
    console.log(isLogged);
    return (
        <NavigationContainer>
            {isLogged ? <LoggedStack /> : <NoLoggedStack />}
        </NavigationContainer>
    );
};

export default Router;
