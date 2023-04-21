import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../../components';
import { AddNewVeterinarie, MisPedidos } from '../../screens';
import { colors } from '../../constants';
import { TabNavigator } from '../TabNavigator';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export interface DrawerNavigationProps {}

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: colors.primary,
            }}
            drawerContent={(props) => <DrawerContent props={props} />}
        >
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Mis Pedidos',
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 5 }}
                        />
                    ),
                }}
                name="misPedidos_drawer"
                component={MisPedidos}
            />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Registra tu veterinaria',
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 10 }}
                        />
                    ),
                }}
                name="add_veterinarie"
                component={AddNewVeterinarie}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
