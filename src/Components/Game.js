import React, { useState } from "react";

const Game = ({ p1, p2, showForm }) => {
  const [turn, setTurn] = useState("X");
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [borderB1, setBorderB1] = useState("3px solid red");
  const [borderB2, setBorderB2] = useState("");

  function changeTurn(event) {
    if (event.target.className === "col" && event.target.innerHTML === "") {
      if (turn === "X") {
        setTurn("0");
        setBorderB1("none");
        setBorderB2("3px solid blue");
        event.target.innerHTML = turn;
        event.target.style.color = "red";
      } else {
        setTurn("X");
        setBorderB1("3px solid red");
        setBorderB2("none");
        event.target.innerHTML = turn;
        event.target.style.color = "blue";
      }
      evaluateScore();
    }
  }

  function evaluateScore() {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const boxes = document.querySelectorAll(".col");
    matrix.forEach((e) => {
      if (
        boxes[e[0]].innerText !== "" &&
        boxes[e[0]].innerText === boxes[e[1]].innerText &&
        boxes[e[1]].innerText === boxes[e[2]].innerText
      ) {
        if (turn === "X") {
          setScoreP1(scoreP1 + 1);
        } else {
          setScoreP2(scoreP2 + 1);
        }
        boxes[e[0]].style.backgroundColor = "black";
        boxes[e[1]].style.backgroundColor = "black";
        boxes[e[2]].style.backgroundColor = "black";
      }
    });
  }

  function resetGame() {
    const boxes = document.querySelectorAll(".col");
    boxes.forEach((e) => {
      e.innerHTML = "";
      e.style.backgroundColor = "";
    });
  }
  return (
    !showForm && (
      <div className="main-container">
        <div className="score-container">
          <div className="player-1" style={{ borderBottom: borderB1 }}>
            {p1} - {scoreP1}
          </div>
          <div className="player-2" style={{ borderBottom: borderB2 }}>
            {p2} - {scoreP2}
          </div>
        </div>
        <div className="game-container" onClick={changeTurn}>
          <div className="row">
            <div className="col" id="1"></div>
            <div className="col" id="2"></div>
            <div className="col" id="3"></div>
          </div>
          <div className="row">
            <div className="col" id="4"></div>
            <div className="col" id="5"></div>
            <div className="col" id="6"></div>
          </div>
          <div className="row">
            <div className="col" id="7"></div>
            <div className="col" id="8"></div>
            <div className="col" id="9"></div>
          </div>
        </div>
        <div className="reset-btn-container" onClick={resetGame}>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    )
  );
};

export default Game;
