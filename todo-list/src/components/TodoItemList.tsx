import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import TodoItem from './TodoItem';

interface Props {

}

const TodoItemList: React.FC<Props> = () => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);

  return (
    <>
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </>
  )
}

export default TodoItemList
