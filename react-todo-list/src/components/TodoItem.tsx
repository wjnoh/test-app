import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../modules/todos';

interface Props {
  id: number;
  text: string;
  done: boolean;
}

const TodoItem: React.FC<Props> = ({ id, text, done }) => {
  const dispatch = useDispatch();

  const handleTodoToggle = () => {
    dispatch(toggleTodo(id));
  }

  const handleTodoRemove = () => {
    dispatch(removeTodo(id));
  }

  return (
    <>
      <br />
      <div>{id}</div>
      <div>{text}</div>
      <div onClick={handleTodoToggle}>{String(done)}</div>
      <div onClick={handleTodoRemove}>X</div>
    </>
  )
}

export default TodoItem
