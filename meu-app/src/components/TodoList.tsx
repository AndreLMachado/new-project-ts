import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;