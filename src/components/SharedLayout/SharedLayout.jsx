import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavLink } from 'react-router-dom'; 

export const SharedLayout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <div>
                <nav>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
            <div>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </div>
    );
};