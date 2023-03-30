import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
export interface DrawerProps {}

const Drawer : React.FC<DrawerProps> = () => {
	return <Text>Drawer</Text>;
};

export default Drawer;
