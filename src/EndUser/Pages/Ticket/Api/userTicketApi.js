import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const userTicketApi = createApi({
    reducerPath: 'userTicketApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/user`,
        credentials: 'include'
    }),
    tagTypes: ['UserTicket'],
    endpoints: (builder) => ({
        getAllTickets: builder.query({
            query: () => '/tickets',
            providesTags: ['UserTicket']
        }),

        showTicket: builder.query({
            query: (id) => `/tickets/show/${id}`,
        }),

        createTicket: builder.mutation({
            query: (ticket) => ({
                url: '/tickets',
                method: 'POST',
                body: ticket,
            }),
            invalidatesTags: ['UserTicket']
        }),

        updateTicket: builder.mutation({
            query: (ticket, id) => ({
                url: `/tickets/${id}`,
                method: 'PATCH',
                body: ticket,
            }),
            invalidatesTags: ['UserTicket']
        }),

        deleteTicket: builder.mutation({
            query: (id) => ({
                url: `/tickets/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['UserTicket']
        }),

        getTicketCAtegories: builder.query({
            query: () => ({
                url: '/base-data/issue_categories'
            }),
            invalidatesTags: ['UserTicket']
        }),
    }),
})

export const {
    useGetAllTicketsQuery,
    useShowTicketQuery,
    useCreateTicketMutation,
    useUpdateTicketMutation,
    useDeleteTicketMutation,
    useGetTicketCAtegoriesQuery } = userTicketApi


