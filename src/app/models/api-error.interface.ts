export interface AppError {
    global: boolean;
    code?: number;
    message: string;
}

export const enum ERROR_MSG {
    ALREADY_EXISTS = 'ALREADY EXISTS',
    INVALID_DATA = 'INVALID DATA',
    NOT_FOUND = 'NOT FOUND',
    ACCESS_DENIED = 'ACCESS DENIED'
}
