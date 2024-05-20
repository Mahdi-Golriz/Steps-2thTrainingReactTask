import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [click, setClick] = useState(true);

  function PreviousHandle() {
    step > 1 && setStep((st) => st - 1);
  }

  function NextHandle() {
    step < 3 && setStep((st) => st + 1);
  }

  function handleClick() {
    setClick((i) => !i);
    setStep(1);
  }

  return (
    <div className="steps">
      <span className="close" onClick={handleClick}>
        &times;
      </span>
      {click && (
        <>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={PreviousHandle}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={NextHandle}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
