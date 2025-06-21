import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

// Асинхронные действия
export const loginUser = createAsyncThunk<User, { email: string; password: string }>(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            // Здесь будет реальный API запрос
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Неверные учетные данные');
            }

            const user = await response.json();
            localStorage.setItem('token', user.token);
            return user;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        localStorage.removeItem('token');
        return null;
    }
);

export const checkAuthStatus = createAsyncThunk<User>(
    'auth/checkStatus',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Нет токена');
            }

            const response = await fetch('/api/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Токен недействителен');
            }

            return await response.json();
        } catch (error: any) {
            localStorage.removeItem('token');
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(checkAuthStatus.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer; 