import {configureStore} from '@reduxjs/toolkit';
import tabacoReducer from './slices/tabacoSlice';
import hookahReducer from './slices/hookahSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
    reducer: {
        tabaco: tabacoReducer,
        hookah: hookahReducer,
        data: dataReducer,


    },
})