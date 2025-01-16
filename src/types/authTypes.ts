export interface User {
    name?: string;
    email: string;
    password: string;
    role?: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}
