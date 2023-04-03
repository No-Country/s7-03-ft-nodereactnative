export interface ResponseLogin {
    data?: {
        results: Results;
    };
    error?: {
        data: Data;
        status: number;
    };
}

export interface Results {
    token: string;
    user: User[];
}

export interface Data {
    error: string;
    message: string;
    statusCode: number;
}

export interface User {
    codePhone: string;
    country: string;
    createdAt: Date;
    email: string;
    firstName: string;
    id: string;
    isActive: boolean;
    lastName: string;
    phone: string;
    role: Role;
    roleId: string;
    updatedAt: Date;
}

export interface Role {
    name: string;
}

export interface Data {
    error: string;
    message: string;
    statusCode: number;
}
