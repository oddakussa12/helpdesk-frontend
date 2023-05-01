import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// checkes for user role and if it is authenticated user
const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.access_token
                ? <Navigate to="/unauthorized" state={{from: location}} replace />
                :<Navigate to="/" state={{from: location}} replace />
    );
}

export default RequireAuth; 