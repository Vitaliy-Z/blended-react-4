import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../../store/filterSlice';
import Filter from '../Filter/Filter';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';
import Text from '../Text/Text';

const TodoList = () => {
  const todos = useSelector(selectVisibleTodos);

  return (
    <>
      {todos.length > 0 ? (
        <>
          <Filter />

          <Grid>
            {todos.map((el, idx) => (
              <GridItem key={el.id}>
                <Todo id={el.id} counter={idx + 1} text={el.text} />
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};

export default TodoList;
