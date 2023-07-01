import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/action';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const createContact = contact => dispatch(createContact(contact));
    

    const handleInputChange = ({ target: { name, value } }) => {
        if (name === 'name') setName(value);
        else if (name === 'number') setPhone(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.items.some(contact => contact.name === name)) message(name)
        else createContact({ name, phone });
    
        setName('');
        setPhone('');
    };
    
    const message = name => alert(`${name} is already in contacts`);
    
        return (
            <form
                className={css.form}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
            <label className={css['label-name']}>
                <span className={css['label-text']}>Name</span>
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
            </label>
            <label className={css['label-number']}>
                <span className={css['label-text']}>Number</span>
                <input
                    className={css.input}
                    value={phone}
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css['btn-add']}>Add contact</button>
        </form>
        );
};