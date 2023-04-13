import { createStackNavigator } from '@react-navigation/stack';

import { Text } from 'react-native';
import { Veterinarias } from '../../screens/Veterinarias';
import { VeterinariasScreen } from '../../screens/VeterinariasScreen';

export interface VetRouteProps {}

const VetRoute: React.FC<VetRouteProps> = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="VetList"
                component={Veterinarias}
                options={{
                    title: 'Clinicas veterinarias',
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="VetDetail"
                component={VeterinariasScreen}
                options={{
                    title: 'Detalle',
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default VetRoute;
