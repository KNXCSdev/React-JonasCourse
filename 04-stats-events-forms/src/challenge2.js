import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2 / 100)).toFixed(2);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <Bill onSetBill={setBill} bill={bill} />
      <Select percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </Select>
      <Select percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </Select>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip}></Output>
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function Bill({ onSetBill, bill }) {
  return (
    <div>
      <label> How much was the bill?</label>{" "}
      <input value={bill} type="text" onChange={(e) => onSetBill(+e.target.value)} />
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      You pay ${bill + tip} ($({bill} + ${tip}) tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={() => onReset()}>Reset</button>;
}

function Select({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absoultelly Amazing(20%)</option>
      </select>
    </div>
  );
}
