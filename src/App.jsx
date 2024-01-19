import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import {WINNING_COMBINATIONS} from './components/winning_combinations'
import GameOver from "./components/GameOver";
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


deriveGameBoard((gameTurns)=> {
  let gameBoard = [...board.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
});
function deriveWinner(gameBoard,players){
    
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
  
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
       
 // Break out of the loop once a winner is found
    }

  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState(
    {
      X:"player 1",
      O:"player 2"
    }
  )
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derriveActivePlayer(gameTurns);

  
 const gameBoard = deriveGameBoard(gameTurns);
 const winner = deriveWinner(gameBoard,players);



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
  const draw = gameTurns.length === 9 && !winner;

function resetGame() {
  setGameTurns([]);
}
function handlePlayerName(symbol, name) {
setPlayers((prevPlayers) => {
  return{
    ...prevPlayers,
    [symbol]: name
  };
});
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          onChangeName={handlePlayerName}
          />
          <Player
            player="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
             onChangeName={handlePlayerName}
          />
        </ol>
          {(winner || draw) &&  <GameOver winner={winner} reload={resetGame} />}
       
        <GameBoard game={gameBoard} onSelectedPlayer={handleActivePlayer} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
