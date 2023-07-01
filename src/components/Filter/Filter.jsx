import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));


    return(
        <div className={css.filter}>
            <p className={css['filter-text']}>Find contacts by name</p>
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