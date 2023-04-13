import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Settings from '../Settings/Settings';
import MisPedidos from '../../MisPedidos/MisPedidos';
import Favorites from '../Favorites/Favorites';

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
                options={{ tabBarLabel: 'Favoritos' }}
                name="Favorites"
                component={Favorites}
            />
        </Tab.Navigator>
    );
}
export default TabView;
