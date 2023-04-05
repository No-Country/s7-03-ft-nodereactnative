import { TabBarContainer, TabBarIcon, TabBarLogo } from './tabBar.style';
import { Entypo } from '@expo/vector-icons';
import {
    useNavigation,
    ParamListBase,
} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../../constants';
import { TouchableOpacity } from 'react-native';

export interface TabBarProps {}

const TabBar: React.FC<TabBarProps> = () => {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
    return (
        <TabBarContainer>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <TabBarIcon>
                    <Entypo name="menu" size={30} color={colors.primaryLight} />
                </TabBarIcon>
            </TouchableOpacity>
            <TabBarLogo
                source={require('../../../assets/PetsDidosYaLogo/Logo.webp')}
            />
        </TabBarContainer>
    );
};

export default TabBar;
