export const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/todos");
    if (!response.ok) {
      throw new Error("Erro ao buscar tarefas");
    }

    const data = await response.json();

    // Convertendo "task" para "text"
    return data.map((todo: { id: string; task: string }) => ({
      id: todo.id,
      text: todo.task,
    }));
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};