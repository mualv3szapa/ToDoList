import React, { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, onSave }) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSave = () => {
    onSave(taskDescription);
    setTaskDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Descreva sua tarefa</h2>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Exemplo de descrição"
        />
        <button onClick={handleSave}>Confirmar tarefa</button>
      </div>
    </div>
  );
}

export default Modal;
