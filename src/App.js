import "./App.css";
import React, { useState } from "react";

const RandomNum = Math.floor(Math.random() * 100);

function App() {
  const [tries, settries] = useState(4);
  let input;
  console.log(RandomNum);
  const wisdom = [];
  function takeInput(value) {
    input = value;
  }
  function comparison() {
    console.log(`random number ${RandomNum}`);
    console.log(`input ${input}`);
    if (input > 0 && input < 100) {
      if (Math.abs(RandomNum - input) > 10) setBtn("You are too far off");
      else if (Math.abs(RandomNum - input) === 0)
        setBtn("You guessed the right number");
      else setBtn("You are close to the number");
      if (tries > 0) {
        settries(tries - 1);
      } else {
        setBtn("You are out of tries");
      }
    } else {
      setBtn("Invalid input");
    }
  }

  const [sekWisdom, setSeekWisdom] = useState([]);
  const [Btn, setBtn] = useState("");
  function pushintowisdom() {
    setSeekWisdom([
      Math.floor(Math.random() * (100 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (75 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (10 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (50 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (25 - RandomNum) + RandomNum),
    ]);
  }
  const mappedWisdom = sekWisdom.map((wisdom) => <button>{wisdom}</button>);
  return (
    <div className="App">
      <h1>This is the guessing game</h1>
      <h2>Find the secret number</h2>
      <div>
        <h1>You have {tries} Tries</h1>
      </div>
      <input
        type="number"
        onChange={(e) => takeInput(e.target.value)}
        placeholder="Number between 1-100"
      />
      <div>
        <button
          onClick={() => {
            if (input) comparison();
          }}
        >
          Guess
        </button>
      </div>
      <div>
        <br />
        <button onClick={() => settries(4)}>Surrender</button>
        <button onClick={pushintowisdom}>Seek Wisdoms</button>
        <br />
        {mappedWisdom}
        <div>
          <h1>{Btn}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
