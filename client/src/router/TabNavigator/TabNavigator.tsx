import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text>Test tab navigator</Text>
            <Icon name="star-outline" size={50} color="black" />
        </View>
    );
};

export default TabNavigator;
