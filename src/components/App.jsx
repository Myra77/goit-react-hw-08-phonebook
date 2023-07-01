import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authAction';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PrivateRoute } from '../components/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? ( <b>Refreshing user...</b> ) : (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
            <Route index element={
                <PrivateRoute>
                <ContactsPage />
                </PrivateRoute>} />
            <Route path="contacts" element={
                <PrivateRoute>
                    <ContactsPage />
                </PrivateRoute>
                }
            />
            <Route path="register" element={
                <PublicRoute>
                    <SignUp />
                </PublicRoute>
            }
            />
            <Route path="login" element={
                <PublicRoute>
                    <SignIn />
                </PublicRoute>
            }
            />
            </Route>
        </Routes>
  );
};