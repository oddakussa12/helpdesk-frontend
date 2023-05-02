import './App.css';
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./Auth/components/PersistLogin";
import RequireAuth from "./middleware/RequireAuth";

// end user routes
import UserHome from './EndUser/Pages/UserHome';
import CreateTicket from './EndUser/Pages/CreateTicket';

// public routes
import WorldLayout from './World/Layouts/WorldLayout';
import WorldHome from './World/Pages/WorldHome';
import PageNotFound from "./common/PageNotFound";
import Unauthorized from "./common/Unauthorized";
import Login from './World/Components/Login';
import Register from './World/Components/Register';
import Faq from './World/Pages/Faq';


const ROLES = {
  'USER' : 2000,
  'SUPPORT' : 2000,
  'ADMIN' : 2000,
}

function App() {
  return (
    <div className="App">
       <Routes>
        <Route element={<PersistLogin />}>

          {/*  merchant/consumers routes */}
          <Route>
            <Route path="/home" element={<WorldLayout />}>
              <Route path="" element={<UserHome />} />
              <Route path="create-ticket" element={<CreateTicket />} />
              {/* <Route path="profile" element={<Profile />} />
              <Route path="faqs" element={<Profile />} />
              <Route path="payment" element={<PaymentTab />}>
                <Route index element={<ChoosePayment />} />
                <Route path="choose-payment" element={<ChoosePayment />}/>
                <Route path="payment-confirmation" element={<PaymentConfirmation />}/>
              </Route> */}
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
