import "../css/App.css";
import React, { useState, useEffect } from "react";
import Board from "./Board";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [order, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [log, setLog] = useState([]);
  useEffect(() => {
    if (score >= bestScore) setBestScore(score);
    if (score === 8) {
      console.log("you win!");
      setBestScore(score);
      setLog([]);
      setScore(0);
    }
  }, [score, bestScore]);
  useEffect(() => {}, [log]);
  useEffect(() => {}, [order]);
  function shuffleOrder(order) {
    let orderArray = order;
    orderArray.sort(() => 0.5 - Math.random());
    return orderArray;
  }
  function handleCardClick(event) {
    let pickedCard = event.target.getAttribute("alt");
    if (log.includes(pickedCard)) {
      setLog([]);
      setScore(0);
      console.log("you lost");
    } else {
      setLog([...log, pickedCard]);
      setScore(score + 1);
    }
    if (score >= bestScore) {
      setBestScore(score);
    }
    let newOrder = shuffleOrder(order);
    setOrder([...newOrder]);
  }

  return (
    <div className="App">
      <header>
        <img src={require("../assets/logo.png")} alt="Memory Game" />
      </header>
      <Board
        className="board"
        handleCardClick={handleCardClick}
        order={order}
      />
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
};

export default App;
