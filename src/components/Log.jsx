import React from 'react'

const Log = ({turns}) => {
  return (
    <div>
      {turns.map((turn, index) => (
        <li  id="log" key={'${turn.square.row}${turn.square.col}'}>
          {turn.player} Selected {turn.square.row} , {turn.square.col}</li>
      ))}
    </div>
  )
}

export default Log
