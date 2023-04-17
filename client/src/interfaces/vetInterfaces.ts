export interface VetInterface {
    id:string
    name: string;
    description: string;
    country: string;
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
}

export interface Vet {
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
    user: {
        id: string;
        firstName: string;
        lastName: string;
        country: string;
    };
}