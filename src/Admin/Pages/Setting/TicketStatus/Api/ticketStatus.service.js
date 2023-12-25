import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const ticketStatusApi = createApi({
    reducerPath: 'ticketStatusApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/admin/ticket-status`
    }),
    tagTypes: ['TicketStatus'],
    endpoints: (builder) => ({
        getAllTicketStatus: builder.query({
            query: () => '',
            providesTags: ['TicketStatus']
        }),
        createTicketStatus: builder.mutation({
            query: (ticketStatus) => ({
                url: '',
                method: 'POST',
                body: ticketStatus,
            }),
            invalidatesTags: ['TicketStatus']
        }),
        updateTicketStatus: builder.mutation({
            query: (ticketStatus) => ({
                url: `/${ticketStatus.id}`,
                method: 'PATCH',
                body: ticketStatus,
            }),
            invalidatesTags: ['TicketStatus']
        }),
        deleteTicketStatus: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['TicketStatus']
        }),

    }),
})

export const {
    useGetAllTicketStatusQuery,
    useCreateTicketStatusMutation,
    useUpdateTicketStatusMutation,
    useDeleteTicketStatusMutation } = ticketStatusApi