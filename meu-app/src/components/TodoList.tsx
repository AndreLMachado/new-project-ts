import React from 'react';

// Interface para tipar as props
interface TodoListProps {
  todos: { id: number; task: string }[]; // Agora cada tarefa tem um ID
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.task}</span>
          <button onClick={() => onDelete(todo.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;