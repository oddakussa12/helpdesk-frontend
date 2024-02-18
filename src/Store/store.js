import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from "./authSlice";
import { dashboardApi } from "../Admin/Pages/Dashboard/Api/dashboard.service";
import { ticketApi } from "../Admin/Pages/Ticket/Api/tickt.service";
import { ticketPriorityApi } from "../Admin/Pages/Setting/TicketPriority/Api/ticketPriority.service";
import { ticketStatusApi } from "../Admin/Pages/Setting/TicketStatus/Api/ticketStatus.service";
import { userComplainApi } from "../EndUser/Pages/Complain/Api/userComplain.service";
import { userTicketApi } from "../EndUser/Pages/Ticket/Api/userTicketApi";
import { supportTicketApi } from "../Support/Pages/Home/Api/supportTicketApi";
import { supportFaqApi } from "../Support/Pages/Faq/Api/supportFaqApi";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    [ticketPriorityApi.reducerPath]: ticketPriorityApi.reducer,
    [ticketStatusApi.reducerPath]: ticketStatusApi.reducer,
    [userComplainApi.reducerPath]: userComplainApi.reducer,
    [userTicketApi.reducerPath]: userTicketApi.reducer,
    [supportTicketApi.reducerPath]: supportTicketApi.reducer,
    [supportFaqApi.reducerPath]: supportFaqApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware, ticketApi.middleware, ticketPriorityApi.middleware,
      ticketStatusApi.middleware, userComplainApi.middleware, userTicketApi.middleware, supportTicketApi.middleware,
      supportFaqApi.middleware),
});

// export default store;
setupListeners(store.dispatch)

