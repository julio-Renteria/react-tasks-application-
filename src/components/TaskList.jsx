import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const maxTasks = 20; // max number of tasks (pruebas m.)

function TaskList() {
  const { tasks } = useContext(TaskContext); //utilizo objeto que paso por value en taskContext

  if (tasks.length === 0) {
    return <h1>No tasks found</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.title} task={task} />
      ))}
    </>
  );
}

export default TaskList;
