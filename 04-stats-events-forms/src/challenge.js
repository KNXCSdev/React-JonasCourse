import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + step);

  return (
    <div className="container">
      <div>
        <button onClick={() => setStep((s) => s - count)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + count)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + 1)}>+</button>
      </div>
      <p>
        <span>
          {step === 0
            ? "Today is"
            : step > 0
            ? `${step} days from today is`
            : `${step} days ago was`}
        </span>{" "}
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
