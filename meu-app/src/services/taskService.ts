const API_URL = "http://localhost:5000/todos"; // URL do json-server

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTask = async (task: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  return res.json();
};

export const deleteTask = async (id: string) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
