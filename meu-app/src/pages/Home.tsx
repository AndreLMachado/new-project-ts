import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';

const API_URL = 'http://localhost:5000/todos';

interface Todo {
  id: number;
  task: string;
}

const Home: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Carregar tarefas do db.json na inicialização
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error('Erro ao buscar tarefas:', err));
  }, []);

  // Adicionar nova tarefa ao db.json
  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { task };
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos([...todos, data]); // Adiciona a nova tarefa ao estado
          setTask('');
        })
        .catch((err) => console.error('Erro ao adicionar tarefa:', err));
    }
  };

  // Excluir tarefa do db.json
  const handleDeleteTask = (id: number) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id)); // Remove a tarefa do estado
      })
      .catch((err) => console.error('Erro ao excluir tarefa:', err));
  };

  return (
    <div className="page">
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