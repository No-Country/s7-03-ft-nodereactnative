import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../../components';
import { Home, MisPedidos } from '../../screens';
import { colors } from '../../constants';

const Drawer = createDrawerNavigator();

export interface DrawerNavigationProps {}

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveBackgroundColor: colors.primary }} drawerContent={(props) => <DrawerContent props={props} />}
        >
            <Drawer.Screen name="home_drawer" component={Home} />
            <Drawer.Screen name="misPedidos_drawer" component={MisPedidos} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
