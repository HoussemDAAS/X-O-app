import React from "react";
import { useState } from "react";
const GameBoard = ({onSelectedPlayer,turns}) => {


  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  
  let gameBoard = board;
  for( const turn of turns){
      const {square,player} = turn ;
      const {row,col} = square;
      gameBoard[row][col]=player;
    }

//   const [gameBoard, setGameBoard] = useState(board);

//   const handleClick = (rowIndex, colIndex) => {
//     setGameBoard((prevGameBoard)=>
//     { const updateGameBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
// updateGameBoard[rowIndex][colIndex] = turns.player ;
// return updateGameBoard;
//     });
//    onSelectedPlayer(); 
//   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbole, colIndex) => (
              <li key={colIndex}>
                <button onClick={() =>onSelectedPlayer(rowIndex,colIndex)}>{playerSymbole}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
