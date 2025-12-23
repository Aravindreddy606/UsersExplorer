import React, { useEffect } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setPage, setSearch } from '../redux/usersSlice';
import { RootState } from '../redux/store';
import UserItem from '../components/UserItem';

const UsersScreen = ({ navigation }: any) => {
    const dispatch = useDispatch<any>();
    const { list, loading, page, search } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const filtered = list.filter((u: any) =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    const data = filtered.slice(0, page * 5);

    return (
        <View>
            <TextInput
                placeholder="Search user"
                onChangeText={text => dispatch(setSearch(text))}
                style={{ padding: 10, borderWidth: 1, margin: 10 }}
            />

            {loading && <ActivityIndicator size="large" />}

            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => dispatch(setPage())}
                renderItem={({ item }) => (
                    <UserItem
                        user={item}
                        onPress={() => navigation.navigate('Details', { user: item })}
                    />
                )}
            />
        </View>
    );
};

export default UsersScreen;
