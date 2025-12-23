import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'USERS_DATA';

export const saveUsers = async (data: any) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
};

export const loadUsers = async () => {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : null;
};
