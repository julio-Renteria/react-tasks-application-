import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

//******* */
function hola() {
  console.log("functio Hola");
}
//******* */

function TaskCard({ task, onSelectTask }) {
  //***check
  const [marcado, setMarcado] = useState(false); //check

  const { deleteTask } = useContext(TaskContext);

  const handleChange = (e) => {
    onSelectTask(e.target.value, e.target.checked);
  };

  return (
    <div className=" hover:animate-bounc bg-gray-800 text-white p-4 rounded-md animate-none">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>

      <input
        value={task.id}
        className="mx-3"
        type="checkbox"
        onChange={handleChange}
      />

      <button
        className="bg-red-500 p-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
