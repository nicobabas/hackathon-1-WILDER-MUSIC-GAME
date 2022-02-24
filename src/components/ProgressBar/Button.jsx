import React from "react";
import ProgressBar from "./ProgressBar.jsx";
import ReactDOM from "react-dom";

const Button = () => {
  const [progress, setProgress] = React.useState(0);
  return (
    <div className="ProgressBar">
      <ProgressBar progress={progress} />
      <br />
      <div>
        <button onClick={() => setProgress(0)}>0</button>
        <button onClick={() => setProgress(10)}>1</button>
        <button onClick={() => setProgress(20)}>2</button>
        <button onClick={() => setProgress(30)}>3</button>
        <button onClick={() => setProgress(40)}>4</button>
        <button onClick={() => setProgress(50)}>5</button>
        <button onClick={() => setProgress(60)}>6</button>
        <button onClick={() => setProgress(70)}>7</button>
        <button onClick={() => setProgress(80)}>8</button>
        <button onClick={() => setProgress(90)}>9</button>
        <button onClick={() => setProgress(100)}>10</button>
      </div>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<Button />, root);

export default Button;
