import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import {WINNING_COMBINATIONS} from './components/winning_combinations'
function derriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derriveActivePlayer(gameTurns);
  let winner;
  
  let gameBoard = board;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  
  for (const combination of WINNING_COMBINATIONS) {
  
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
       
 // Break out of the loop once a winner is found
    }
  }

  console.log(winner);

  const handleActivePlayer = (rowIndex, colIndex) => {
    
    setGameTurns((prevTurns) => {
      const currentPlayer = derriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  };
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            player="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
          {winner && <p>{winner} is the winner</p>}
        
        <GameBoard game={gameBoard} onSelectedPlayer={handleActivePlayer} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
