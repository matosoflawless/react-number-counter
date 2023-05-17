import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const setCountToZero = () => {
    setCount(0);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <main>
      <h1>Number Counter</h1>
      <h2>My first React app</h2>
      <h3>Counter : {count}</h3>
      <button
        onClick={() => {
          if (count < 100) {
            incrementCount();
          }
        }}
      >
        Increment
      </button>
      <button onClick={setCountToZero}>Reset</button>
      <button
        onClick={() => {
          if (count > 0) {
            decrementCount();
          }
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(randomNum(1, 100))}>Random</button>
    </main>
  );
}

export default App;
