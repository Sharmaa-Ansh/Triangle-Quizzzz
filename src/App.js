import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Angles from "./Angles";
import Area from "./Area";
import "./home.css";
import Areacalc from "./Areacalc";

export default function App() {
  return (
    <div className="App">
      <h1>The Triangle Trilogy</h1>
      <Router>
        <div>
          <ul>
            <li className="links">
              <Link className="bink" to="/">
                Triangle Quiz
              </Link>
            </li>
            <li className="links">
              <Link className="bink" to="/about">
                Check if its a Triangle
              </Link>
            </li>
            <li className="links">
              <Link className="bink" to="/dashboard">
                Calculate the Hypotenuse
              </Link>
            </li>
            <li className="links">
              <Link className="bink" to="/areacalc">
                Calculate the Area
              </Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <Angles />
            </Route>
            <Route path="/dashboard">
              <Area />
            </Route>
            <Route path="/areacalc">
              <Areacalc />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const queslist = {
  "What is the sum of all angles of a triangle": ["240", "180", "360"],
  "What angle is right angle": ["60", "32", "90"],
  "An Isosceles triangle has:": [
    "All different Angles",
    "2 Angles Same",
    "All Angles Same"
  ],
  "An Equilateral triangle has all angles": ["60", "45", "100"],
  "If a triangle has 2 angles of 75 dgrees what is the measure of third angle?": [
    "25",
    "30",
    "15"
  ]
};
const anskey = {
  "What is the sum of all angles of a triangle": "180",
  "What angle is right angle": "90",
  "An Isosceles triangle has:": "2 Angles Same",
  "An Equilateral triangle has all angles": "60",
  "If a triangle has 2 angles of 75 dgrees what is the measure of third angle?":
    "30"
};

var ques = Object.keys(queslist);

function Home() {
  var rcounter = 0;
  const [verdict, setVerdict] = useState();
  function checkHandler() {
    setVerdict("You got " + rcounter + " out of 5 correct");
  }

  return (
    <div className="home">
      <h1>Take a Quizz</h1>
      <h2>Click the buttons and Submit</h2>
      {ques.map((item) => {
        return (
          <div className="ques-ans-container">
            <div className="ques-container">{item}</div>
            <div className="btn-container">
              {queslist[item].map((option) => {
                return (
                  <button
                    className="buttons"
                    onClick={() => {
                      if (option === anskey[item]) {
                        rcounter = rcounter + 1;
                      }
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <button className="verdict-btn" onClick={checkHandler}>
        Submit
      </button>
      <div className="verdict">{verdict} </div>
    </div>
  );
}
