import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, modifierState, counterDoubleModifier } from "./state";
import "./App.css";

function CounterTwo() {
  const [count, setCount] = useRecoilState(counterState);
  const [modifier, setModifier] = useRecoilState(modifierState);
  const doubleValue = useRecoilValue(counterDoubleModifier);

  const changeModifier = (value: string) => {
    if (value) {
      setModifier(parseFloat(value));
    } else {
      setModifier(1);
    }
  };

  return (
    <>
      <h2>Counter Two</h2>
      <div className="card">
        <label htmlFor="modifier">Modifier: </label>
        <input
          type="text"
          onChange={(e) => changeModifier(e.target.value)}
        />{" "}
        <br />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          the new value is {doubleValue}
        </button>
      </div>
    </>
  );
}

export default CounterTwo;
