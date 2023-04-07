import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../reduxApp/services/users/users';
import { AuthSlice } from '../../router/Router';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import Alerts from '../../components/Alerts/Alerts';
import { safeTopSpace } from '../../constants';
import TabView from './TabView/TabView';

const UserProfile = () => {
    return (
        <View
            style={{
                marginTop: safeTopSpace,
                flex: 1,
            }}
        >
            <Image
                style={{ height: 50, width: 50 }}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIdD74Dj1FwX3sOCRuwFgNlXNW64dknk8VTifSvZC4gsYJGEp7FKRiSO1NYp9BfVvToU&usqp=CAU',
                }}
            />
            <TabView />
        </View>
    );
};

export default UserProfile;
