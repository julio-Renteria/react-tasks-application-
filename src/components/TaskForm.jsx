import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); //utilizo el context
  const [titleError, setTitleError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setTitleError("Escribe un Titulo");
    }

    if (title === "" || description === "") {
      return;
    }

    setTitleError("");

    createTask({
      title,
      description,
      id: uuidv4(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" max-w-md mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-lg "
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
        <p className="text-white">{titleError}</p>

        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <button
          className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300"
          // disabled={title === "" || description === ""}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
