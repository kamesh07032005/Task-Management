import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/global.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case "dueDate":
        // If no due date, move to bottom
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();

      case "priority":
        const priorityMap = { High: 0, Medium: 1, Low: 2 };
        return priorityMap[a.priority] - priorityMap[b.priority];

      default:
        // Sort by recently added
        return b.id - a.id;
    }
  });

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">Task Manager</h1>
        <div className="app-controls">
          <DarkModeToggle />
          <div className="filter-sort">
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
              <option value="all">All Tasks</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
              <option value="default">Sort by</option>
              <option value="priority">Sort by Priority</option>
              <option value="dueDate">Sort by Due Date</option>
            </select>
          </div>
        </div>
        <TaskForm addTask={addTask} />
      </header>

      <div className="task-list-container">
        <TaskList
          tasks={sortedTasks}
          setTasks={setTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
