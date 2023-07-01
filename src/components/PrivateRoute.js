import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const location = useLocation();

    const isRedirect = !isLoggedIn && !isRefreshing;
    return isRedirect ? <Navigate to="/login" state={location} /> : children;
};

export default PrivateRoute;