import React from "react";
import { useState } from "react";
const GameBoard = () => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];


  const [gameBoard, setGameBoard] = useState(board);

  const handleClick = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard)=>
    { const updateGameBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
updateGameBoard[rowIndex][colIndex] = 'X';
return updateGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbole, colIndex) => (
              <li key={colIndex}>
                <button onClick={() =>handleClick(rowIndex,colIndex)}>{playerSymbole}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
