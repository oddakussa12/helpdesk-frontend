import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/admin/dashboard/` }),
    endpoints: (builder) => ({
        getUserRoleCount: builder.query({
            query: () => 'user_count',
        }),
        getTicketCount: builder.query({
            query: () => 'ticket_count',
        }),
        getSupportPerformance: builder.query({
            query: () => 'support_performance',
        })
    }),
})

export const { useGetUserRoleCountQuery, useGetTicketCountQuery, useGetSupportPerformanceQuery } = dashboardApi