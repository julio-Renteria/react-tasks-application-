import TaskCard from "./TaskCard";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const maxTasks = 20; // max number of tasks (pruebas m.)

function TaskList() {
  const { tasks } = useContext(TaskContext); //utilizo objeto que paso por value en taskContext
  const [selectedTasks, setSelectedTasks] = useState([]);

  function onSelectTask(idTask, checked) {
    if (checked) {
      setSelectedTasks([...selectedTasks, idTask]);
    } else {
      const filteredTask = selectedTasks.filter((id) => id !== idTask);

      setSelectedTasks([...filteredTask]);
    }
  }

  function deleteTasks() {
    console.log(selectedTasks);
  }

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No tasks found
      </h1>
    );
  }

  return (
    <>
      {true && (
        <button
          className="bg-red-500 p-2 py-1 rounded-md mt-4 hover:bg-red-400 text-white"
          onClick={() => deleteTasks()}
        >
          Eliminar Seleccionados
        </button>
      )}

      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.title} task={task} onSelectTask={onSelectTask} />
        ))}
      </div>
    </>
  );
}
export default TaskList;
