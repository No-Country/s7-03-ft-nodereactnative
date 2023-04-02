export interface ResponseLogin {
    results: {
        token: string;
        user: User;
    };
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
