import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/action';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const createContact = contact => dispatch(addContact(contact));
    

    const handleInputChange = ({ target: { name, value } }) => {
        if (name === 'name') setName(value);
        else if (name === 'number') setNumber(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.items.some(contact => contact.name === name)) message(name)
        else createContact({ name, number });
    
        setName('');
        setNumber('');
    };
    
    const message = name => alert(`${name} is already in contacts`);
    
        return (
            <form
                className={css.formContactForm}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
            <div className={css.wrapperContactForm}>
            <label className={css.label} htmlFor="name">Name</label>
                <input
                    className={css.input}
                    value={name}
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </div>
            <div className={css.wrapperContactForm}>
            <label className={css.label} htmlFor="tel">Number</label>
                <input
                    className={css.input}
                    value={number}
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <button type="submit" className={css.btnAddContact}>Add contact</button>
        </form>
        );
};