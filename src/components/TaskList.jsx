import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const maxTasks = 20; // max number of tasks (pruebas m.)

function TaskList() {
  const { tasks } = useContext(TaskContext); //utilizo objeto que paso por value en taskContext

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No tasks found
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.title} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
