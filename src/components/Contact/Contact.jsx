import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, deleteContact }) => {
    return (
        <ul>
            <li className={css['contact-wrapper']}>
                {name}: <span>{number}</span>
                <button type="submit" className={css.btnDelete} onClick={() => deleteContact(id)}>Delete</button>
            </li> 
        </ul>        
    )
};

Contact.propTypes = {
    contact: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
};
