import { useState, useEffect } from "react";
import TaskList, { maxTasks } from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { Contador } from "./Count";
import { tasks } from "./data/tasks";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      {/* <h1>La cantidad maxima de tareas es: {tasks.length}</h1> */}

      <div className="container mx-auto p-10">
        <Contador />
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
