import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Cart, Settings, Favorites } from '../../screens';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Inicio"
                component={Home}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'heart' : 'heart-outline'}
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Favoritos"
                component={Favorites}
            />

            <Tab.Screen
                options={{
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 5 }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Carro de compras"
                component={Cart}
            />
            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Mi perfil',
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 5 }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={focused ? colors.primary : '#b2b2b2'}
                        />
                    ),
                }}
                name="Perfil"
                component={Settings}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
