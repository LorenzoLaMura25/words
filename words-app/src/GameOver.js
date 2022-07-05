import React,{useContext} from 'react'
import {AppContext} from './App';

function GameOver () {
    const {gameOver,currentAttempt,correctWord}= useContext(AppContext)
  return (
    <div className="gameOver">
        <h3>{gameOver.guessedWord ? "You Guessed the World" : "You didn't guessed"}</h3>
        <h1>The Correct Was:{correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver