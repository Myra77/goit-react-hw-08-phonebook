import { useState } from 'react';
import { GoPlus, GoX } from "react-icons/go";
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

const ContactsPage = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => setToggle(!toggle);
    return (
        <div>
            <h1>Phonebook</h1>
            {toggle && <ContactForm />}
            <p>Contacts</p>
            <Filter />
            <ContactList />
            {toggle ? <button type="button" onClick={toggleHandler}><GoX></GoX></button> : <button type="button" onClick={toggleHandler}><GoPlus></GoPlus></button>}
        </div>
    );
};

export default ContactsPage;