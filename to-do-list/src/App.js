import React, { useState } from "react";
import Modal from "./Components/Modal";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Começar a execução do projeto", completed: false },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (taskDescription) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: taskDescription, completed: false },
    ]);
  };

  return (
    <div className="container">
      <div className="task-container">
        <h2 className="date-text">
          Terça-Feira, <span>24</span> de Julho
        </h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Procurar tarefa                                                                    🔍"
            className="search-input"
          />
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <button
                className="task-button"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? "✓" : "◻️"}
              </button>
              <span className="task-iten-name">{task.text}</span>
              <div className="button-group">
                <button
                  className="task-button"
                  onClick={() => deleteTask(task.id)}
                >
                  ❌
                </button>
                <button className="task-button">✏️</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="new-task-button"
          onClick={() => setIsModalOpen(true)}
        >
          Nova tarefa
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTask}
      />
    </div>
  );
}

export default App;
