import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Data {
  firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
    codePhone: string;
    phone: string
}

export const apiAuthSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.11.128:5000/api/v1'
  }),
  endpoints: (builder) =>(
    {
    register: builder.mutation({
        query:({ firstName, lastName, password, email, country, codePhone, phone }: Data)=>({
            url: '/auth/signup',
            method: 'POST',
            body: { firstName, lastName, password, email, country, codePhone, phone }
        })
    })
  }),
});

export const { useRegisterMutation } = apiAuthSlice;