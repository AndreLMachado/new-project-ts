// src/components/Todo.tsx
import React from 'react';

// Definindo o tipo para uma tarefa
interface TodoProps {
  task: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default Todo;