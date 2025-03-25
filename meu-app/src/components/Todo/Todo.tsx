import React from "react";
import { TodoContainer, TaskText, DeleteButton } from "./Todo.styles";

interface TodoProps {
  task: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ task, onDelete }) => {
  return (
    <TodoContainer>
      <TaskText>{task}</TaskText>
      <DeleteButton onClick={onDelete}>Excluir</DeleteButton>
    </TodoContainer>
  );
};

export default Todo;