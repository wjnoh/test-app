import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

interface Props {

}

const TodoForm: React.FC<Props> = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(inputData));
    setInputData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputData} onChange={handleChange} />
      <button type="submit">작성</button>
    </form>
  )
}

export default TodoForm