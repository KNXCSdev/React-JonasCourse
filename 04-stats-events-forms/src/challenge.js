import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(1);
    setStep(1);
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="1"
          value={step}
          max="10"
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input type="text" value={count} onChange={(e) => setCount(+e.target.value)}></input>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>{" "}
        <span>{date.toDateString()}</span>
      </p>

      {count !== 1 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : null}
    </div>
  );
}
