import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); //utilizo el context

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <dir className=" max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300">
          Guardar
        </button>
      </form>
    </dir>
  );
}

export default TaskForm;
