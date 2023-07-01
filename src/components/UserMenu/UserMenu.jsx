import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/auth/authAction';
import { resetContacts } from '../../redux/contacts/contactsSlice';
import { resetFilter } from '../../redux/contacts/filterSlice';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogout = () => {
        dispatch(resetFilter());
        dispatch(resetContacts());
        dispatch(logout());
    }

    return (
        <div>
            <p> <b> {user.name}</b> </p>
            <button
                type="button"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};