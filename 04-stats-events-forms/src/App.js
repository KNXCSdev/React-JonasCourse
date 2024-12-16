import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  return (
    <div>
      <Steps></Steps>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1); //step,setStep.  Step is a base value so 1 and setState is a function to execute
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //useState is a hook can only use useSTATE outside a function
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    //BAD PRACTICE
    //ALWAYS TREAT STATE AS IMMUTABLE
    //const [test] = useState({name:'Jan'})
    //test.name='FRED'
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(isOpen === true ? false : true)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#333"
                bgColor="#e7e7e7"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious} text="Previous">
              <span>👈 Previous</span>
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext} text="Next">
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step} </h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}
