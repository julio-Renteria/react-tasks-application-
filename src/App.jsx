import { useState, useEffect } from "react";
import TaskList, { maxTasks } from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { Contador } from "./Count";

function App() {

  



 

  return (
    <>
      <h1>La cantidad maxima de tareas es: {maxTasks}</h1>
      <TaskForm  />
      <TaskList  />
      <Contador />
      <Contador />
      <Contador />
    </>
  );
}

export default App;
