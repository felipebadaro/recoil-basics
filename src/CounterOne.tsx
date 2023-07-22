import { useRecoilState } from "recoil";
import { counterState } from "./state";
import "./App.css";

function CounterOne() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <>
      <div></div>
      <h1>Learning React Recoil</h1>
      <h2>Counter One</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default CounterOne;
