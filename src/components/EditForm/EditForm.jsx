import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTodo, updateTodos } from '../../store/todosSlice';

const EditForm = ({ todo }) => {
  const [textEdit, setTextEdit] = useState(todo.text ?? '');
  const dispatch = useDispatch();
  const handleChange = e => setTextEdit(e.target.value);
  const handleCancel = () => {
    dispatch(setCurrentTodo(null));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTodos(textEdit));
    dispatch(setCurrentTodo(null));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="Write to edit?"
        name="text"
        value={textEdit}
        required
        autoFocus
        onChange={handleChange}
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
