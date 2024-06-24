import { useState } from "react";
import { sum } from "./sum";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = (a: number, b: number) => {
    setCount(sum(a, b));
  };
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => addCount(count, 1)}>count is: {count}</button>
    </>
  );
}

export default App;
