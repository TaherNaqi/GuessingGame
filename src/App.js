import "./App.css";
import React, { useState } from "react";
// definding randomnum outside of the app function to keep it constant
const RandomNum = Math.floor(Math.random() * 100);

function App() {
  // states to be used in the react app

  const [tries, settries] = useState(4);
  const [sekWisdom, setSeekWisdom] = useState([]);
  const [Btn, setBtn] = useState("");
  let input;
  console.log(RandomNum);
  const wisdom = [];
  function takeInput(value) {
    input = value;
  }

  // checking on input in relation to the random number

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
  //Generating an array of random numbers within ranges of random number generated at start
  function pushintowisdom() {
    setSeekWisdom([
      Math.floor(Math.random() * (100 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (75 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (10 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (50 - RandomNum) + RandomNum),
      Math.floor(Math.random() * (25 - RandomNum) + RandomNum),
    ]);
  }
  const mappedWisdom = sekWisdom.map((wisdom) => (
    <button class="button" onClick={(input = wisdom)}>
      {wisdom}
    </button>
  ));
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
        placeholder="Number from 1-100"
      />
      <div>
        <br />
        <button
          class="button"
          onClick={() => {
            if (input) comparison();
          }}
        >
          Guess
        </button>
      </div>
      <div>
        <br />
        <button class="button" onClick={() => settries(4)}>
          Surrender
        </button>
        <button class="button" onClick={pushintowisdom}>
          Seek Wisdoms
        </button>
        <br />
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
