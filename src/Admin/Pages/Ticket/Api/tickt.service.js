import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const ticketApi = createApi({
    reducerPath: 'ticketApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/admin/tickets`
    }),
    tagTypes: ['Ticket'],
    endpoints: (builder) => ({
        getAllTickets: builder.query({
            query: () => '',
            providesTags: ['Ticket']
        }),
        showTicket: builder.query({
            query: (id) => `show/${id}`,
        }),
        deleteTicket: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Ticket']
        }),
        assignTicket: builder.mutation({
            query: (data) => ({
                url: `/assign/${data.id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Ticket']
        }),
        changePriority: builder.mutation({
            query: (id) => ({
                url: `/change-priority/${id}`,
                method: 'POST',
                body: id,
            }),
            invalidatesTags: ['Ticket']
        }),
    }),
})

export const {
    useGetAllTicketsQuery,
    useShowTicketQuery,
    useAssignTicketMutation,
    useDeleteTicketMutation,
    useChangePriorityMutation } = ticketApi