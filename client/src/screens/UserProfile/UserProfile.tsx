import { View, Text, Image, StatusBar } from 'react-native';
import TabView from './TabView/TabView';
import { colors } from '../../constants/colors';

const UserProfile = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <StatusBar backgroundColor={colors.primaryLight} />
            <TabView />
        </View>
    );
};

export default UserProfile;
