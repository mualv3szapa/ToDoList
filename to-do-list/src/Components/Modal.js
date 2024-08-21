import React, { useState, useEffect } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, onSave, initialDescription }) {
  const [taskDescription, setTaskDescription] = useState(initialDescription);

  useEffect(() => {
    setTaskDescription(initialDescription);
  }, [initialDescription]);

  const handleSave = () => {
    onSave(taskDescription);
    setTaskDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialDescription ? "Editar tarefa" : "Descreva sua tarefa"}</h2>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Exemplo de descrição"
        />
        <button onClick={handleSave}>
          {initialDescription ? "Salvar edição" : "Confirmar tarefa"}
        </button>
      </div>
    </div>
  );
}

export default Modal;
