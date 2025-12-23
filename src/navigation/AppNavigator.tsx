import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from '../screens/UsersScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Details" component={UserDetailsScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
