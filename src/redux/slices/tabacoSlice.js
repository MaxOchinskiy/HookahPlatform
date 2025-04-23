import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [], // Данные табака
    searchValue: '', // Значение строки поиска
    sortOrder: 'asc', // Сортировка
};

const tabacoSlice = createSlice({
    name: 'tabaco',
    initialState,
    reducers: {
        setTabacos(state, action) {
            state.list = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setSortOrder(state, action) {
            state.sortOrder = action.payload;
        },
    },
});

export const { setTabacos, setSearchValue, setSortOrder } = tabacoSlice.actions;
export default tabacoSlice.reducer;
