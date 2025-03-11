import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
      <TodoList todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;