import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContact } from '../../redux/contacts/action';
import { Contact } from 'components/Contact/Contact';
import { useNavigate } from 'react-router-dom';

import css from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.isLoading);
    const error = useSelector(state => state.contacts.error);
    const navigate = useNavigate;

    useEffect(() => {
        dispatch(fetchContact())
            .unwrap()
            .catch(() => navigate('/login'));
    }, [dispatch, navigate]);
    const filteredContacts = () => 
        contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));

    const removeContact = id => dispatch(deleteContact(id));

    return (
        <div className={css.contactList}>
            {(error && <b>{error}</b>) ||
            (isLoading && <b>Please wait, loading is in progress...</b>) ||
            filteredContacts().map(contact => (
                <li key={contact.id} className={css.contactListItem}>
                    <Contact 
                    contact={contact} 
                    deleteContact={removeContact} />
                </li>
            ))}
        </div>
    );
};