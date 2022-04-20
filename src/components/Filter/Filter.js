import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
}

export default Filter;
