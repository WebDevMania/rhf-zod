type TState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type TError = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export type {
    TState,
    TError
}