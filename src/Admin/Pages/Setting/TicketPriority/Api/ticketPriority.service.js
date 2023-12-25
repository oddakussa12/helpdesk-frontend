import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const ticketPriorityApi = createApi({
    reducerPath: 'ticketPriorityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/admin/ticket-priority/`
    }),
    tagTypes: ['TicketPriority'],
    endpoints: (builder) => ({
        getAllPriority: builder.query({
            query: () => '',
            providesTags: ['TicketPriority']
        }),
        createTicketPriority: builder.mutation({
            query: (ticketStatus) => ({
                url: '',
                method: 'POST',
                body: ticketStatus,
            }),
            invalidatesTags: ['TicketPriority']
        }),
        updateTicketPriority: builder.mutation({
            query: (ticketStatus) => ({
                url: `/${ticketStatus.id}`,
                method: 'PATCH',
                body: ticketStatus,
            }),
            invalidatesTags: ['TicketPriority']
        }),
        deleteTicketPriority: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['TicketPriority']
        }),
    }),
})

export const {
    useGetAllPriorityQuery,
    useCreateTicketPriorityMutation,
    useUpdateTicketPriorityMutation,
    useDeleteTicketPriorityMutation } = ticketPriorityApi