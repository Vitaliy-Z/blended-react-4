import { useSelector } from 'react-redux';
import { selectEditTodo } from './store/todosSlice';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const editTodo = useSelector(selectEditTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!editTodo ? <Form /> : <EditForm todo={editTodo} />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
