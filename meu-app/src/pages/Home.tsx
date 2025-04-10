import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService"; // Importando a função do serviço
import TodoList from "../components/TodoList/TodoList";
import { Link } from "react-router-dom";

import { DivContainer } from "./pages.styles";

interface Todo {
  id: string;
  task: string;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Lista de tarefas
  const [error, setError] = useState<string | null>(null); // Armazenar erro caso ocorra

  // Função para buscar as tarefas do banco de dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasks(); 
        setTodos(tasks); // Atualiza o estado corretamente
      } catch (err) {
        setError("Erro ao carregar tarefas");
      }
    };

    fetchData(); // Chama a função de carregamento das tarefas
  }, []); // Executa apenas uma vez quando o componente é montado

  // Função para excluir uma tarefa
  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir tarefa");
      }

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Atualiza o estado após a exclusão
    } catch (err) {
      setError("Erro ao excluir tarefa");
    }
  };

  return (
    <DivContainer>
      <h1>Lista de Tarefas</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Exibe erro caso ocorra */}
      <TodoList todos={todos} onDelete={handleDeleteTask} /> {/* Passa a lista de tarefas para o componente TodoList */}
      <Link to="http://localhost:3000/">Adicionar nova tarefa</Link>
    </DivContainer>
  );
};

export default Home;