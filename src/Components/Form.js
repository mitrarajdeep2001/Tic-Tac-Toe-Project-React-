import React, { useState } from "react";

const Form = ({ p1, p2, setP1, setP2, showForm, setShowForm }) => {
  function getPlayers(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }
  return (
    showForm && (
      <form onSubmit={getPlayers}>
        <h2>Player Details</h2>
        <div>
          <label for="p1">Player 1 </label>
          <input
            type="text"
            id="p1"
            onChange={(e) => setP1(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label for="p2">Player 2 </label>
          <input
            type="text"
            id="p2"
            onChange={(e) => setP2(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <button id="join-btn">Join Now</button>
      </form>
    )
  );
};

export default Form;
