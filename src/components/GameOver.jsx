import React from 'react'

const GameOver = ({winner}) => {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
      <p>{winner} is the winner</p>
      <p>
        <button>Reset Game</button>
      </p>
    </div>
  )
}

export default GameOver
