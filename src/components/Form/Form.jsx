import { FiSearch } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../store/todosSlice';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.search.value.trim();

    if (value !== '') {
      dispatch(addTodos({ id: nanoid(), text: value }));
    }

    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        autoComplete="off"
      />
    </form>
  );
};

export default Form;
