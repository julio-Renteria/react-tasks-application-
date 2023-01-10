import { useState, useEffect } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
 

  useEffect(() => {
    console.log("Modificado");
  }, [contador]);

  return (
    <>
      <h1>Contador: {contador} </h1>
      <button onClick={() => setContador((prev) => prev - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </>
  );
}
