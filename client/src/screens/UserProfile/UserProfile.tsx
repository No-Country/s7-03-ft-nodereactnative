import { View, Text, Image, StatusBar } from 'react-native';
import { safeTopSpace } from '../../constants';
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
            <Image
                style={{
                    marginTop: 25,
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    marginLeft: 30,
                }}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIdD74Dj1FwX3sOCRuwFgNlXNW64dknk8VTifSvZC4gsYJGEp7FKRiSO1NYp9BfVvToU&usqp=CAU',
                }}
            />
            <View style={{ marginTop: 20 }} />
            <TabView />
        </View>
    );
};

export default UserProfile;
