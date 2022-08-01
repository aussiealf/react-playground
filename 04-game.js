// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import { useLocalStorageState } from '../utils'
import Board from './04-board'
import Info  from './04-info'



function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
        
      </div>
      <div className="game-info">
        <Info />
      </div>
    </div>
  )
}

export default Game
