import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, counterDoubleModifier } from "./state";
import "./App.css";

function CounterTwo() {
  const [count, setCount] = useRecoilState(counterState);
  const doubleValue = useRecoilValue(counterDoubleModifier);

  return (
    <>
      <h2>Counter Two</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          the double is {doubleValue}
        </button>
      </div>
    </>
  );
}

export default CounterTwo;
