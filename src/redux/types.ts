// types.ts
export interface Hookah {
    id: string;
    name: string;
    description: string;
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
