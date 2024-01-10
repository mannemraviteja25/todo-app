import React, { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // Fetch todos on component mount

  const handleTodoCreated = () => {
    // Fetch updated todos when a new todo is created
    fetchTodos();
  };

  return (
    <div>
      <CreateTodo onTodoCreated={handleTodoCreated} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
