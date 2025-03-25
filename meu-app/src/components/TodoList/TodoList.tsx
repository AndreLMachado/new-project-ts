import React from "react";
import Todo from "../Todo/Todo";
import { ListContainer } from "./TodoList.styles";

interface Todo {
  id: string;
  task: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo.task} onDelete={() => onDelete(todo.id)} />
      ))}
    </ListContainer>
  );
};

export default TodoList;