import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const userComplainApi = createApi({
    reducerPath: 'userComplainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/user/complains`,
        credentials: 'include'
    }),
    tagTypes: ['UserComplain'],
    endpoints: (builder) => ({
        getAllComplains: builder.query({
            query: () => '',
            providesTags: ['UserComplain']
        }),
        showComplain: builder.query({
            query: (id) => `show/${id}`,
        }),
        createComplain: builder.mutation({
            query: (complain) => ({
                url: '',
                method: 'POST',
                body: complain,
            }),
            invalidatesTags: ['UserComplain']
        }),
        deleteComplain: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['UserComplain']
        }),
    }),
})

export const {
    useGetAllComplainsQuery,
    useShowComplainQuery,
    useCreateComplainMutation,
    useDeleteComplainMutation, } = userComplainApi