import { useState } from "react";
import "./PlayerStats.css";

function PlayerStats() {
  const [hp, setHp] = useState(40);
  const [experience, setExperience] = useState(0);
  const [poison, setPoison] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [commanderDamage, setCommanderDamage] = useState(0);

  const handleHpChange = (amount: number) => {
    setHp((prev) => Math.max(0, prev + amount));
  };

  const handleCommanderDamage = (amount: number) => {
    setCommanderDamage((prev) => Math.max(0, prev + amount)); // Update commander damage
    setHp((prev) => Math.max(0, prev - amount)); // Decrease HP
  };
  return (
    <div className="player-stats red-player">
      <h1 className="player-name">Red</h1>
      <div className="hp-bar">
        <button className="hp-plus" onClick={() => handleHpChange(-1)}>
          -
        </button>
        <span className="hp-display">{hp}</span>
        <button className="hp-minus" onClick={() => handleHpChange(1)}>
          +
        </button>
      </div>
      <div className="counters">
        <div className="counter">
          <span>Experience: {experience}</span>
          <button
            className="counter-plus"
            onClick={() => setExperience((prev) => prev + 1)}>
            +
          </button>
          <button
            className="counter-minus"
            onClick={() => setExperience((prev) => Math.max(0, prev - 1))}>
            -
          </button>
        </div>
        <div className="counter">
          <span>Poison: {poison}</span>
          <button onClick={() => setPoison((prev) => prev + 1)}>+</button>
          <button onClick={() => setPoison((prev) => Math.max(0, prev - 1))}>
            -
          </button>
        </div>
        <div className="counter">
          <span>Energy: {energy}</span>
          <button onClick={() => setEnergy((prev) => prev + 1)}>+</button>
          <button onClick={() => setEnergy((prev) => Math.max(0, prev - 1))}>
            -
          </button>
        </div>
        <div className="counter">
          <span>Commander Damage: {commanderDamage}</span>
          <button onClick={() => handleCommanderDamage(1)}>+</button>
          <button onClick={() => handleCommanderDamage(-1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;
