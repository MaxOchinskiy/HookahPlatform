import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [], // Список кальянных
    searchValue: '', // Значение строки поиска
    sortOrder: 'asc', // Порядок сортировки (asc, desc)
};

export const hookahSlice = createSlice({
    name: 'hookah',
    initialState,
    reducers: {
        // Устанавливаем данные кальянных
        setHookahList(state, action) {
            state.list = action.payload;
        },
        // Обновляем значение строки поиска
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        // Устанавливаем порядок сортировки
        setSortOrder(state, action) {
            state.sortOrder = action.payload;
        },
    },
});

export const { setHookahList, setSearchValue, setSortOrder } = hookahSlice.actions;
export default hookahSlice.reducer;