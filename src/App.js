import "./App.css";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./Auth/components/PersistLogin";
import RequireAuth from "./middleware/RequireAuth";

// end user routes
import UserHome from "./EndUser/Pages/Home/UserHome";
import CreateTicket from "./EndUser/Pages/CreateTicket";
import ViewTicket from "./EndUser/Pages/ViewTicket";
import UserLayout from "./EndUser/Layouts/UserLayout";

// support role routes
import SupportLayout from "./Support/Layouts/SupportLayout";
import SupportHome from "./Support/Pages/Home/SupportHome";
import SupportProfile from "./Support/Pages/SupportProfile";
import SupportViewTicket from "./Support/Pages/ViewTicket";
import SupportFaq from "./Support/Pages/Faq/SupportFaq";
import SupportAddFaq from "./Support/Pages/Faq/SupportAddFaq";
import SupportEditFaq from "./Support/Pages/Faq/SupportEditFaq";
import SupportViewFaq from "./Support/Pages/Faq/SupportViewFaq";

// admin routes
import AdminLayout from "./Admin/Layouts/AdminLayout";
import Setting from "./Admin/Pages/Setting/Setting";
import AdminProfile from "./Admin/Pages/Profile/AdminProfile";
import User from "./Admin/Pages/User/User";
import Ticket from "./Admin/Pages/Ticket/Ticket";
import ShowTicket from "./Admin/Pages/Ticket/ShowTicket";
import AdminFaq from "./Admin/Pages/Faq/AdminFaq";
import AddFaq from "./Admin/Pages/Faq/AddFaq";
import EditFaq from "./Admin/Pages/Faq/EditFaq";
import ViewFaq from "./Admin/Pages/Faq/ViewFaq";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import Visualization from "./Admin/Pages/Visualization/Visualization";

// public routes
import WorldLayout from "./World/Layouts/WorldLayout";
import WorldHome from "./World/Pages/WorldHome";
import PageNotFound from "./common/PageNotFound";
import Unauthorized from "./common/Unauthorized";
import Login from "./Auth/Pages/Login/Login";
import Register from "./Auth/Pages/Register/Register";
import Faq from "./World/Pages/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PersistLogin />}>
          {/*  end user routes */}
          <Route element={<RequireAuth allowedRoles={["User"]} />}>
            <Route path="/home" element={<UserLayout />}>
              <Route path="" element={<UserHome />} />
              <Route path="create-ticket" element={<CreateTicket />} />
              <Route path="view-ticket/:ticketId" element={<ViewTicket />} />
            </Route>
          </Route>

          {/* support role routes */}
          <Route element={<RequireAuth allowedRoles={["Support"]} />}>
            <Route path="/support" element={<SupportLayout />}>
              <Route path="" element={<SupportHome />} />
              <Route path="profile" element={<SupportProfile />} />
              <Route path="faqs" element={<SupportFaq />} />
              <Route path="create-faq" element={<SupportAddFaq />} />
              <Route path="edit-faq/:faqId" element={<SupportEditFaq />} />
              <Route path="view-faq/:faqId" element={<SupportViewFaq />} />
              <Route path="view-ticket/:ticketId" element={<SupportViewTicket />} />
            </Route>
          </Route>

          {/* admin routes */}
          <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Setting />} />
              <Route path="settings" element={<Setting />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="faqs" element={<AdminFaq />} />
              <Route path="create-faq" element={<AddFaq />} />
              <Route path="edit-faq/:faqId" element={<EditFaq />} />
              <Route path="view-faq/:faqId" element={<ViewFaq />} />
              <Route path="users" element={<User />} />
              <Route path="tickets" element={<Ticket />} />
              <Route path="view-ticket/:ticketId" element={<ShowTicket />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="charts" element={<Visualization />} />
            </Route>
          </Route>
        </Route>

        {/* common public routes */}
        <Route path="/" element={<WorldLayout />}>
          <Route path="/" element={<WorldHome />} />
          <Route path="/faqs" element={<Faq />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
