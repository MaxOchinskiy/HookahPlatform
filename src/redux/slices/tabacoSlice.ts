import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Описание типа одного табака (можно расширить при необходимости)
interface TabacoItem {
    id: string;
    brand: string;
    description: string;
    line: string;
    type: string;
    image: string;
    http?: string;
}

// Состояние табачного среза
interface TabacoState {
    list: TabacoItem[];
    searchValue: string;
    sortOrder: 'asc' | 'desc';
}

const initialState: TabacoState = {
    list: [],
    searchValue: '',
    sortOrder: 'asc',
};

const tabacoSlice = createSlice({
    name: 'tabaco',
    initialState,
    reducers: {
        setTabacos(state, action: PayloadAction<TabacoItem[]>) {
            state.list = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
            state.sortOrder = action.payload;
        },
    },
});

export const { setTabacos, setSearchValue, setSortOrder } = tabacoSlice.actions;
export default tabacoSlice.reducer;
