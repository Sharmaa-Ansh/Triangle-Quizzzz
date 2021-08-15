import { useState } from "react";
import "./Angles.css";
function Angles() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [result, setResult] = useState();

  function aHandler(event) {
    setA(parseInt(event.target.value));
  }
  function bHandler(event) {
    setB(parseInt(event.target.value));
  }
  function cHandler(event) {
    setC(parseInt(event.target.value));
  }

  function resultHandler() {
    console.log(a + b + c);
    if (a + b + c === 180) {
      setResult("It is a triangle");
    } else {
      setResult("It is not a Triangle");
    }
  }
  return (
    <div className="Angles">
      <h1>Check if its a triangle</h1>
      <label className="labelo">Enter First Angle</label>
      <input className="entry" type="number" onChange={aHandler} />
      <label className="labelo">Enter Second Angle</label>
      <input className="entry" type="number" onChange={bHandler} />
      <label className="labelo">Enter Third Angle</label>
      <input className="entry" type="number" onChange={cHandler} />
      <button className="buton" onClick={resultHandler}>
        CHECK
      </button>
      <div className="verdict">{result}</div>
    </div>
  );
}

export default Angles;
