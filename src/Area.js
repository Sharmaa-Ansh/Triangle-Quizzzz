import "./hypo.css";
import { useState } from "react";
function Area() {
  var a;
  var b;
  const [result, setResult] = useState();
  function aHandler(event) {
    a = event.target.value;
  }

  function bHandler(event) {
    b = event.target.value;
  }

  function clickHandler() {
    setResult(Math.hypot(a, b));
  }

  const [type, setType] = useState("none");

  function checkHandler(event) {
    console.log(event.target.value);
    if (event.target.value === "on") {
      setType("block");
    }
  }

  return (
    <div className="hypo-Container">
      <h1>Calculate the Hypotenuse of a Triangle</h1>
      <label className="hype">Enter First Side</label>
      <input type="number" onChange={aHandler} />
      <label className="hype">Enter Second Side</label>
      <input type="number" onChange={bHandler} />
      <button className="btn" onClick={clickHandler}>
        CHECK
      </button>
      <div className="verdict">{result}</div>
    </div>
  );
}

export default Area;
