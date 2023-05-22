import "./App.css";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./Auth/components/PersistLogin";
import RequireAuth from "./middleware/RequireAuth";

// end user routes
import UserHome from "./EndUser/Pages/UserHome";
import CreateTicket from "./EndUser/Pages/CreateTicket";
import ViewTicket from "./EndUser/Pages/ViewTicket";

// support role routes
import SupportLayout from "./Support/Layouts/SupportLayout";
import SupportHome from "./Support/Pages/SupportHome";
import SupportProfile from "./Support/Pages/SupportProfile";
import SupportFaq from "./Support/Pages/SupportFaq";
import SupportViewTicket from "./Support/Pages/ViewTicket";

// admin routes
import AdminLayout from "./Admin/Layouts/AdminLayout";
import AdminHome from "./Admin/Pages/AdminHome";
import Setting from "./Admin/Pages/Setting";

// public routes
import WorldLayout from "./World/Layouts/WorldLayout";
import WorldHome from "./World/Pages/WorldHome";
import PageNotFound from "./common/PageNotFound";
import Unauthorized from "./common/Unauthorized";
import Login from "./World/Components/Login";
import Register from "./World/Components/Register";
import Faq from "./World/Pages/Faq";

const ROLES = {
  USER: 2000,
  SUPPORT: 2000,
  ADMIN: 2000,
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PersistLogin />}>
          {/*  end user routes */}
          <Route path="/home" element={<WorldLayout />}>
            <Route path="" element={<UserHome />} />
            <Route path="create-ticket" element={<CreateTicket />} />
            <Route path="view-ticket" element={<ViewTicket />} />
          </Route>
        
          {/* support role routes */}
          <Route path='/support' element={<SupportLayout />}>
            <Route path="" element={<SupportHome />} />
            <Route path="profile" element={<SupportProfile />} />
            <Route path="faqs" element={<SupportFaq />}/>
            <Route path="view-ticket" element={<SupportViewTicket />} />
          </Route>

          {/* admin routes */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path="" element={<AdminHome />} />
            <Route path="settings" element={<Setting />} />
            <Route path="profile" element={<SupportProfile />} />
            <Route path="faqs" element={<SupportFaq />}/>
            <Route path="view-ticket" element={<SupportViewTicket />} />
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
