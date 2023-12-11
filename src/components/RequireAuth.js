import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth);

    console.log(allowedRoles?.includes(auth?.rol));
    console.log('allowedRoles: ', allowedRoles);

    return (
        allowedRoles?.includes(auth?.rol)
            ? <Outlet />
            : auth?.userName
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : < Navigate to='/login' state={{ from: location }} replace />
    );
}
export default RequireAuth;