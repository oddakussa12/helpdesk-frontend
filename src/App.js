import './App.css';
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./Auth/components/PersistLogin";
import RequireAuth from "./middleware/RequireAuth";

// public routes
import WorldLayout from './World/Layouts/WorldLayout';
import WorldHome from './World/Pages/WorldHome';
import PageNotFound from "./common/PageNotFound";
import Unauthorized from "./common/Unauthorized";
import Login from './World/Components/Login';


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
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
            <Route path="/user" element={<MerchantLayout />}>
              <Route path="" element={<MerchantHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="faqs" element={<Profile />} />
              <Route path="payment" element={<PaymentTab />}>
                <Route index element={<ChoosePayment />} />
                <Route path="choose-payment" element={<ChoosePayment />}/>
                <Route path="payment-confirmation" element={<PaymentConfirmation />}/>
              </Route>
            </Route>
          </Route> */}
        </Route>

        {/* common public routes */}
        <Route path="/" element={<WorldLayout />}>
          <Route path="/" element={<WorldHome />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
