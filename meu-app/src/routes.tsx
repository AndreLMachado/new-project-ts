import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/todos" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;