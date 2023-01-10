import { useState, useEffect } from "react";
import { tasks } from "./data/tasks";

export function Contador() {
  const [contador, setContador] = useState(tasks.length);

  useEffect(() => {
    console.log("Modificado");
  }, [contador]);

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-3">Contador : {contador} </h1>
      <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300 mx-2"
        onClick={() => setContador((prev) => prev - 1)}
      >
        -
      </button>
      <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300 "
        onClick={() => setContador(contador + 1)}
      >
        +
      </button>
    </>
  );
}
