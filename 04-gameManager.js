// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import { useLocalStorageState } from '../utils'
import * as Funcs from './04-func'

function GameManager() {
  const [squares, setSquares] = useLocalStorageState("squares",Array(9).fill(null))  
  const [steps, setSteps] = useLocalStorageState("steps",[])

  const nextValue = Funcs.calculateNextValue(squares)
  const winner = Funcs.calculateWinner(squares)
  const status = Funcs.calculateStatus(winner,squares,nextValue)

  function restart() {
    // 🐨 reset the squares
    setSquares(Array(9).fill(null))
  }

  function selectSquare(square) {
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes
    //
    if (winner || squares[square]) {
      return
    }
    // 🦉 It's typically a bad idea to mutate or directly change state in React.
    // Doing so can lead to subtle bugs that can easily slip into production.
    //
    // 🐨 make a copy of the squares array
    // 💰 `[...squares]` will do it!)
    const squaresCopy = [...squares]
    
   
    //
    // 🐨 set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    squaresCopy[square] = nextValue
    //
    // 🐨 set the squares to your copy
    setSquares(squaresCopy)
  }

  return {
    squares, setSquares, steps, setSteps, nextValue, winner, status, restart, selectSquare
  }
}


export default GameManager
