import React, { FC } from 'react';
import TodoForm from './components/TodoForm';
import TodoItemList from './components/TodoItemList';

const App: FC = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoItemList />
    </div>
  );
}

export default App;
