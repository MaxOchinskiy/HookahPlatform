// types.ts
export interface Hookah {
    id: string;
    name: string;
    description?: string;
    address?: string;
    images?: string[];
    menu?: string[];
    reviews?: Review[];
    atmosphere?: string;
    price?: string;
    imageMap?: string;
    contactInfo?: string;
    rating?: number;
    workingHours?: string;
    features?: string[];
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Tabaco {
    id: string;
    brand: string;
    description: string;
    line: string;
    type: string;
    image: string;
    http?: string;
    strength?: number;
    nicotine?: number;
    flavor?: string[];
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    preferences?: {
        favoriteHookahs?: string[];
        favoriteTabacos?: string[];
    };
}

export interface RootState {
    data: {
        hookahList: Hookah[];
        tabacoList: Tabaco[];
        loading: boolean;
        error: string | null;
        requests: {
            hookahList: { loading: boolean; error: string | null };
            tabacoList: { loading: boolean; error: string | null };
        };
    };
    hookah: {
        searchValue: string;
        sortOrder: "asc" | "desc";
    };
    tabaco: {
        searchValue: string;
        sortOrder: "asc" | "desc";
    };
    auth: {
        user: User | null;
        isAuthenticated: boolean;
        loading: boolean;
        error: string | null;
    };
}
