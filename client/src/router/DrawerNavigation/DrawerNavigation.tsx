import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../screens/Home';

const Drawer = createDrawerNavigator();

export interface DrawerNavigationProps {}

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
