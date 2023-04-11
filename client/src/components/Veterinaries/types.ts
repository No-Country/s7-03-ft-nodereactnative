export interface Veterinary {
    id: string;
    userId: string;
    name: string;
    description: string;
    country: string;
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
}
