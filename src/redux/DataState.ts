import { Hookah, Tabaco } from './types'; // импортируешь уже описанные типы

export interface DataState {
    hookahList: Hookah[];
    tabacoList: Tabaco[];
    loading: boolean;
    error: string | null;
    requests: {
        hookahList: {
            loading: boolean;
            error: string | null;
        };
        tabacoList: {
            loading: boolean;
            error: string | null;
        };
    };
}
