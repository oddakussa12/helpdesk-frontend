import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_API_URL;

export const supportFaqApi = createApi({
    reducerPath: 'supportFaqApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/support/faqs`,
        credentials: 'include'
    }),
    tagTypes: ['SupportFAQ'],
    endpoints: (builder) => ({
        getAllFaqs: builder.query({
            query: () => '',
            providesTags: ['SupportFAQ']
        }),

        showFaq: builder.query({
            query: (id) => `/show/${id}`,
        }),

        createFaq: builder.mutation({
            query: (faq) => ({
                url: '',
                method: 'POST',
                body: faq,
            }),
            invalidatesTags: ['SupportFAQ']
        }),

        getTicketCAtegories: builder.query({
            query: () => ({
                url: '/base-data/issue_categories'
            }),
            invalidatesTags: ['SupportFAQ']
        }),
    }),
})

export const {
    useGetAllFaqsQuery,
    useShowFaqQuery,
    useCreateFaqMutation,
    useGetTicketCAtegoriesQuery } = supportFaqApi


