import React, { useState } from "react";
import { addTask } from "../../services/taskService";
import { FormContainer, Input, SubmitButton } from "./TaskForm.styles";

interface TaskFormProps {
  onTaskAdded: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    await addTask(task);
    setTask("");
    onTaskAdded();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <SubmitButton type="submit">Adicionar</SubmitButton>
    </FormContainer>
  );
};

export default TaskForm;