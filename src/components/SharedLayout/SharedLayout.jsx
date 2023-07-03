import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavLink } from 'react-router-dom'; 
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div className={css.wrapper}>
            <header className={css.headerLayout}>
                <nav>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
            <div>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </div>
    );
};