import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserItem = ({ user, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.email}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderBottomWidth: 1,
    },
    name: {
        fontWeight: 'bold',
    },
});

export default UserItem;
