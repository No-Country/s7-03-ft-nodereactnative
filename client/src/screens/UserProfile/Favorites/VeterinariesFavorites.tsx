import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useGetVeterinariesFavoritesQuery } from '../../../reduxApp/services/veterinaries-favorites/veterinariesFavorites';
import RenderVetFav from './RenderFav';

export interface VetFav {
    id: string;
    user: User;
    userId: string;
    veterinary: Veterinary;
    veterinaryId: string;
}

export interface User {
    firstName: string;
    id: string;
    lastName: string;
}

export interface Veterinary {
    address: string;
    country: string;
    createdAt: Date;
    description: string;
    id: string;
    isActive: boolean;
    latitude: number;
    longitude: number;
    name: string;
    phone: string;
    updatedAt: Date;
    userId: string;
}

const VeterinariesFavorites = () => {
    const { data, isLoading } = useGetVeterinariesFavoritesQuery('');

    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <Text style={{ textAlign: 'center' }}>
                    Veterinarias favoritas{' '}
                </Text>
                {isLoading ? (
                    <ActivityIndicator size={30} />
                ) : data?.results?.veterinariesFavorites?.length >= 1 ? (
                    data?.results?.veterinariesFavorites.map((vet: VetFav) => {
                        return (
                            <RenderVetFav key={vet?.veterinaryId} vet={vet} />
                        );
                    })
                ) : (
                    <Text style={{ marginTop: 10 }}>
                        No tenes ninguna {'\n'}veterinaria favorita
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default VeterinariesFavorites;
