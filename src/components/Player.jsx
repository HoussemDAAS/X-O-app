import React from "react";
import { useState } from "react";

const Player = ({ player, symbol,isActive,onChangeName }) => {
  const [name, setName] = useState(player);
  const [isEditing, setIsEditing] = useState(false);

  let handlePlayer = (event) => {
    setName(event.target.value);
    if (isEditing)
    {onChangeName(symbol,name);}
  };
  let status = "save";
  if (isEditing) {
    let status = "edit";
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" value={name} onChange={handlePlayer} />
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
          {isEditing ? "save" : "edit"}
        </button>
      </span>
    </li>
  );
};

export default Player;
