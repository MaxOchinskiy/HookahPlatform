// types.ts
export interface Hookah {
    id: string;
    name: string;
    description?: string;
    address?: string;
    images?: string[];
    menu?: string[];
    reviews?: string[];
    atmosphere?: string; // Добавлено
    price?: string; // Добавлено
    imageMap?: string; // Добавлено
    contactInfo?: string; // Добавлено
    // добавь остальные поля, если есть
}

export interface Tabaco {
    id: string;
    brand: string;
    description: string;
    line: string;
    type: string;
    image: string;
    http?: string;
}
export interface RootState {
    data: {
        hookahList: Hookah[];
        loading: boolean;
        error: string | null;
    };
}
