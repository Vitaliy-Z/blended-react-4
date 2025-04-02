import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodos, setCurrentTodo } from '../../store/todosSlice';
import Text from '../Text/Text';
import style from './Todo.module.css';

const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodos(id));
  const handleEdit = () => dispatch(setCurrentTodo(id));

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={handleEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
