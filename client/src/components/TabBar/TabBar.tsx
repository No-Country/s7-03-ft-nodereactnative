import React from 'react';
import { TabBarContainer, TabBarIcon, TabBarLogo } from './tabBar.style';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants';
import { View } from 'react-native';

export interface TabBarProps {}

const TabBar: React.FC<TabBarProps> = () => {
    return (
        <TabBarContainer>
            <TabBarIcon>
                <Entypo name="menu" size={30} color={colors.primaryLight} />
            </TabBarIcon>
            <TabBarLogo
                source={require('../../../assets/PetsDidosYaLogo/Logo.webp')}
            />
            
        </TabBarContainer>
    );
};

export default TabBar;
