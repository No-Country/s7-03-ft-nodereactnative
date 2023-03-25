import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/reduxApp/store';
import { ExampleTwo } from './src/screens/ExampleTwo';
import { Example } from './src/components';

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='exampleTwo'>
                    <Stack.Screen name="example" component={Example} />
                    <Stack.Screen name="exampleTwo" component={ExampleTwo} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
