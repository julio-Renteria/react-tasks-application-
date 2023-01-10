import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//nombre componente
export const TaskContext = createContext();

//componente global

export function TaskContextProvider(props) {
  //.
  const [tasks, setTasks] = useState(data);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// export default TaskContext;
