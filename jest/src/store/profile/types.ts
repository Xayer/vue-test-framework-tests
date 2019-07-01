// types.ts

export interface User {
    name: string;
    userName: string;
    email: string;
    phone?: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}
