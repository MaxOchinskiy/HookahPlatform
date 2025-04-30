import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Hookah, Tabaco } from "../types";
import {DataState} from "../DataState";

// Асинхронные действия
export const fetchHookahList = createAsyncThunk<Hookah[]>(
    "data/fetchHookahList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://67f4eef9913986b16fa26cac.mockapi.io/hookah");
            if (!response.ok)  new Error("Ошибка загрузки кальянных");
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchTabacoList = createAsyncThunk<Tabaco[]>(
    "data/fetchTabacoList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco");
            if (!response.ok)  new Error("Ошибка загрузки табачных смесей");
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// Начальное состояние с типами
const initialState: DataState = {
    hookahList: [],
    loading: false,
    error: null,
    tabacoList: [],
    requests: {
        hookahList: { loading: false, error: null },
        tabacoList: { loading: false, error: null },
    },
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
                state.requests.hookahList.error = action.payload as string;
            });

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
                state.requests.tabacoList.error = action.payload as string;
            });
    },
});

export default dataSlice.reducer;
