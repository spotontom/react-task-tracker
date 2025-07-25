import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null); // username
  const [tasks, setTasks] = useState([]);

  // ✅ On mount, try to restore session
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      fetch("/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: savedUsername }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Session restore failed");
          return res.json();
        })
        .then((data) => {
          setUser(savedUsername);
          setTasks(Array.isArray(data.tasks) ? data.tasks : []);
        })
        .catch(() => {
          localStorage.removeItem("username");
        });
    }
  }, []);
  

  // ✅ After successful login
  const handleLogin = (username, tasksFromServer) => {
    setUser(username);
    setTasks(Array.isArray(tasksFromServer) ? tasksFromServer : []);
    localStorage.setItem("username", username);
  };

  // ✅ Update tasks and push to server
  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    if (user) {
      fetch("/update-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, tasks: newTasks }),
      }).catch((err) => console.error("Failed to update tasks:", err));
    }
  };

  const addTask = (task) => updateTasks([...tasks, task]);
  const deleteTask = (index) =>
    updateTasks(tasks.filter((_, i) => i !== index));
  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    updateTasks(updated);
  };

  // ✅ Log out
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUser(null);
    setTasks([]);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div>
      <Header username={user} onLogout={handleLogout}/>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
