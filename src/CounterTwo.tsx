import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./state";
import { useState } from "react";
import "./App.css";

function CounterTwo() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <>
      <h2>Counter Two</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default CounterTwo;
