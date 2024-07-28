export enum TodoType {
    text,
    list,
    checklist,
    timeline
}

export interface Page<T> {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
}

export interface Todo {
    id: string;
    title: string,
    type: TodoType,
    content: string;
    created: Date;
    updated: Date;
}