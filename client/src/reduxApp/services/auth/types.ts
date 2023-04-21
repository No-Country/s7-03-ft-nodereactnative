export interface ResponseLogin {
    results: Results;
}

export interface Results {
    token: string;
    user: User;
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
    veterinary: [];
}

export interface Role {
    name: string;
}

export interface Data {
    error: string;
    message: string;
    statusCode: number;
}

export interface Veterinaria {
    id: string;
    userId: string;
    name: string;
    description: string;
    country: string;
    address: string;
    latitude: string;
    longitude: string;
    phone: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
