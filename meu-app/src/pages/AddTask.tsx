import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm/TaskForm";

const AddTask: React.FC = () => {
  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <TaskForm onTaskAdded={() => {}} />
      <Link to="http://localhost:3000/todos">Ver Tarefas</Link>
    </div>
  );
};

export default AddTask;