import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//nombre componente
export const TaskContext = createContext();

//componente global

export function TaskContextProvider(props) {
  //.
  const [tasks, setTasks] = useState(data);

  
  // const handleChange = (event) => {
    //   console.log("first");
  //   const [datos, setDatos] = useState(true); //check
  // };
  //
  // const handleChange = (event) => {
  //   console.log("event.target.value");
    //chec
  // };

  //
  function createTask(task) {
    setTasks([
      ...tasks,
      task,
      // {
      //   title: task.title,
      //   id: task.id,
      //   description: task.description,
      // },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    //
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
