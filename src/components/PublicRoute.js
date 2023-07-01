import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return isLoggedIn ? ( <Navigate to={location.state ? location.state : '/contacts'} /> ) : ( children );
};

export default PublicRoute;