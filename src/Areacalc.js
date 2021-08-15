import "./areacalc.css";
import { useState } from "react";
function Areacalc() {
  const [b, setB] = useState();
  const [h, setH] = useState();
  const [result, setResult] = useState();

  function clickHandler() {
    var ans = 0.5 * (h * b);
    setResult(ans + "cm squared");
  }

  return (
    <div className="hypo-Container">
      <h1>Calculate the Area of a Triangle</h1>
      <label className="hype">Enter Base</label>
      <input
        type="number"
        onChange={(e) => {
          setB(parseInt(e.target.value, 10));
        }}
      />
      <label className="hype">Enter Height</label>
      <input
        type="number"
        onChange={(e) => {
          setH(parseInt(e.target.value, 10));
        }}
      />
      <button className="btn" onClick={clickHandler}>
        CHECK
      </button>
      <div className="verdict">{result} </div>
    </div>
  );
}

export default Areacalc;
