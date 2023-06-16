import React, { useState } from 'react';

const Game = ({ p1, p2, showForm }) => {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  return (
    true && (
      <div className="main-container">
        <div className="score-container">
          <div className="player-1">Rajdeep - {scoreP1}</div>
          <div className="player-2">Zara - {scoreP2}</div>
        </div>
        <div className="game-container">
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
        <div className="reset-btn-container">
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    )
  );
};

export default Game;
