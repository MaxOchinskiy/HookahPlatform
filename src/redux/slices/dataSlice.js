import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронные действия для загрузки данных
export const fetchHookahList = createAsyncThunk(
    "data/fetchHookahList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://67f4eef9913986b16fa26cac.mockapi.io/hookah"
            );
            if (!response.ok) {
                throw new Error("Ошибка загрузки кальянных");
            }
            return await response.json();
        } catch (error) {
            console.error("Fetch Hookah List Error: ", error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const fetchTabacoList = createAsyncThunk(
    "data/fetchTabacoList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco"
            );
            if (!response.ok) {
                throw new Error("Ошибка загрузки табачных смесей");
            }
            return await response.json();
        } catch (error) {
            console.error("Fetch Tabaco List Error: ", error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Начальное состояние
const initialState = {
    hookahList: [],
    tabacoList: [],
    requests: {
        hookahList: { loading: false, error: null },
        tabacoList: { loading: false, error: null },
    },
};

// Создаем Slice
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Обработка fetchHookahList
        builder
            .addCase(fetchHookahList.pending, (state) => {
                state.requests.hookahList.loading = true;
                state.requests.hookahList.error = null;
            })
            .addCase(fetchHookahList.fulfilled, (state, action) => {
                state.requests.hookahList.loading = false;
                state.hookahList = action.payload;
            })
            .addCase(fetchHookahList.rejected, (state, action) => {
                state.requests.hookahList.loading = false;
                state.requests.hookahList.error = action.payload;
            });

        // Обработка fetchTabacoList
        builder
            .addCase(fetchTabacoList.pending, (state) => {
                state.requests.tabacoList.loading = true;
                state.requests.tabacoList.error = null;
            })
            .addCase(fetchTabacoList.fulfilled, (state, action) => {
                state.requests.tabacoList.loading = false;
                state.tabacoList = action.payload;
            })
            .addCase(fetchTabacoList.rejected, (state, action) => {
                state.requests.tabacoList.loading = false;
                state.requests.tabacoList.error = action.payload;
            });
    },
});

export default dataSlice.reducer;