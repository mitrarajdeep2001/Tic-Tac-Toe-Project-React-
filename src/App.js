import React, { useState } from "react";
import "./style.css";
import Form from "./Components/Form";
import Game from "./Components/Game";

export default function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [showForm, setShowForm] = useState(true);
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Form
        p1={player1}
        p2={player2}
        setP1={setPlayer1}
        setP2={setPlayer2}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <Game
        p1={player1}
        p2={player2}
        setP1={setPlayer1}
        setP2={setPlayer2}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
}
