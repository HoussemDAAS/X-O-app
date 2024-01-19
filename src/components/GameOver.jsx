import React from 'react'

const GameOver = ({winner,reload}) => {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
      {winner &&<p>{winner} is the winner</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={reload}>Reset Game</button>
      </p>
    </div>
  )
}

export default GameOver
