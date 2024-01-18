import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
 const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");


  const handleActivePlayer=()=>{
    setActivePlayer ((curActivePlayer)=>curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns)=>{
    let currentPlayer="X";
            if(prevTurns.length>0 && prevTurns[0].player ==='X'){
                currentPlayer="O";
            }
            const updateTurns = [{square:{row:rowIndex,col:colIndex}, player: currentPlayer} ,...prevTurns];
            return updateTurns;

            
});
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player player="Player 1" symbol="X" isActive={activePlayer === "X"}/>
         <Player player="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
       <GameBoard  turns={gameTurns} onSelectedPlayer={handleActivePlayer}/>
      </div>
      log
    </main>
  );
}

export default App;
