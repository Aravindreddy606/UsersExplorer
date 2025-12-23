import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/usersApi';
import { saveUsers, loadUsers } from '../utils/storage';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const localData = await loadUsers();
        if (localData) return localData;

        const data = await fetchUsers();
        await saveUsers(data);
        return data;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false,
        error: '',
        page: 1,
        search: '',
    },
    reducers: {
        setPage(state) {
            state.page += 1;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getUsers.rejected, state => {
                state.loading = false;
                state.error = 'Failed to load users';
            });
    },
});

export const { setPage, setSearch } = usersSlice.actions;
export default usersSlice.reducer;
