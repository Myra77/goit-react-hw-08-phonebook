import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));


    return(
        <div className={css.filterWrapper}>
            <p htmlFor="filter">Search</p>
            <input className={css.input}
                type="text"
                name="filter"
                autoComplete="off"
                value={filter}
                onChange={handleChange}
            ></input>
        </div>
    );
};