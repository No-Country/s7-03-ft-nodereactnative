import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Settings from '../Settings/Settings';
import MisPedidos from '../../MisPedidos/MisPedidos';

const Tab = createMaterialTopTabNavigator();

function TabView() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0d0414',
            }}
        >
            <Tab.Screen
                options={{ tabBarLabel: 'Perfil' }}
                name="Profile"
                component={Settings}
            />
            <Tab.Screen
                options={{ tabBarLabel: 'Mis Pedidos' }}
                name="MisPedidos"
                component={MisPedidos}
            />
        </Tab.Navigator>
    );
}
export default TabView;
