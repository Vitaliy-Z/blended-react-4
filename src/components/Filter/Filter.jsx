import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { addFilter } from '../../store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.trim();
    dispatch(addFilter(value.toLowerCase()));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleChange}
    />
  );
};

export default Filter;
