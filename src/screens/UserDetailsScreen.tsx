import React from 'react';
import { View, Text } from 'react-native';

const UserDetailsScreen = ({ route }: any) => {
    const { user } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Company: {user.company.name}</Text>
        </View>
    );
};

export default UserDetailsScreen;
