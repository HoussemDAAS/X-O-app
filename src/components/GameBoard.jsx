import React from "react";
import { useState } from "react";
const GameBoard = ({ onSelectedPlayer, game }) => {

  return (
    <ol id="game-board">
      {game.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbole, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedPlayer(rowIndex, colIndex)}
                  disabled={playerSymbole !== null}
                >
                  {playerSymbole}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
