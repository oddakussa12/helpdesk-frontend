import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const supportTicketApi = createApi({
    reducerPath: 'supportTicketApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/support/tickets`,
        credentials: 'include'
    }),
    tagTypes: ['SupportTicket'],
    endpoints: (builder) => ({
        assignedToMe: builder.query({
            query: () => '/assigned_to_me',
            providesTags: ['SupportTicket']
        }),

        showTicket: builder.query({
            query: (id) => `/show/${id}`,
        }),

        replyTicket: builder.mutation({
            query: (ticket) => ({
                url: `/reply/${ticket.ticket_id}`,
                method: 'post',
                body: ticket,
            }),
            invalidatesTags: ['SupportTicket']
        }),

        getTicketCAtegories: builder.query({
            query: () => ({
                url: '/base-data/issue_categories'
            }),
            invalidatesTags: ['SupportTicket']
        }),
    }),
})

export const {
    useAssignedToMeQuery,
    useShowTicketQuery,
    useReplyTicketMutation,
    useGetTicketCAtegoriesQuery } = supportTicketApi


