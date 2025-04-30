import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Тип для объекта кальянной
interface Hookah {
    id: string;
    name: string;
    description?: string;  // Описание кальянной
    address?: string;      // Адрес кальянной
    images?: string[];     // Список изображений
    atmosphere?: string;   // Атмосфера кальянной (можно добавить по необходимости)
    menu?: string[];       // Меню кальянной (можно добавить по необходимости)
    reviews?: string[];    // Отзывы (по необходимости)
    price?: string;        // Цены
    contactInfo?: string;  // Контактная информация
    imageMap?: string;     // Ссылка на карту для бронирования
    [key: string]: any;    // Дополнительные поля, если они появятся в будущем
}

// Тип состояния слайса
interface HookahState {
    list: Hookah[];
    searchValue: string;
    sortOrder: 'asc' | 'desc';
}

const initialState: HookahState = {
    list: [],
    searchValue: '',
    sortOrder: 'asc',
};

export const hookahSlice = createSlice({
    name: 'hookah',
    initialState,
    reducers: {
        // Устанавливает список кальянных
        setHookahList(state, action: PayloadAction<Hookah[]>) {
            state.list = action.payload;
        },
        // Устанавливает значение для строки поиска
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        // Устанавливает порядок сортировки (по имени)
        setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
            state.sortOrder = action.payload;
        },
    },
});

export const { setHookahList, setSearchValue, setSortOrder } = hookahSlice.actions;
export default hookahSlice.reducer;
