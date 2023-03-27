import React from 'react';
import { Text, View } from 'react-native';

const TabNavigator = () => {
    let test: string = 'Esta el tab navigator';
    console.log(test);
    return (
        <View style={{ marginTop: 50 }}>
            <Text>Test tab navigator</Text>
        </View>
    );
};

export default TabNavigator;
