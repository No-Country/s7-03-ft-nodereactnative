import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, UserProfile, Cart, Messages } from '../../screens';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
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
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? 'chatbubble-ellipses'
                                    : 'chatbubble-ellipses-outline'
                            }
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Mensajes"
                component={Messages}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Carro"
                component={Cart}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={focused ? '#551391' : '#b2b2b2'}
                        />
                    ),
                }}
                name="Perfil"
                component={UserProfile}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
