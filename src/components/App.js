import "../css/App.css";
import React, { useState, useEffect } from "react";
function App() {
  const cards = [];
  for (let i = 1; i <= 8; i++) {
    let gridStyle = "gridArea: " + i;
    cards.push(
      <img
        key={i}
        id={"card" + i}
        src={require("../assets/card/" + i + ".jpg")}
        alt={i}
        style={{ gridStyle }}
      />
    );
  }
  //TO-DO: make this a state and apply dynamic changes to it.
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <header>
        <img src={require("../assets/logo.png")} alt="Memory Game" />
      </header>
      <div className="board">{cards}</div>
      <div className="score">
        <img src={require("../assets/SCORE.png")} alt="score" />
        <img
          id="currentScore"
          src={require("../assets/nbr/" + score + ".png")}
          alt={score}
        />
        <div className="bestScore">
          <img src={require("../assets/best.png")} alt="best score" />
          {/* placeholder */}
          <img
            id="bestScore"
            src={require("../assets/nbr/" + bestScore + ".png")}
            alt={bestScore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
