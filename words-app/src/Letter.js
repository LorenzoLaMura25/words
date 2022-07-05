import React,{useContext}from 'react';

import {AppContext} from './App';

//serve per capire se la lettera è corretta ed è nella posizione giusta,
//se è giusta ma nella posizione sbagliata,
// e se è errrata

function Letter ({letterPos,attemptValue}) {
  const {board,correctWord,currentAttempt} = useContext(AppContext);
  const letter = board[attemptValue][letterPos];


  const correct = correctWord[letterPos] === letter;

  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState = 
  currentAttempt.attempt > attemptValue &&(correct ? "correct" : almost ? "almost": "error");


  return (
    <div className="letter" id={letterState}>
      {""}
      {letter}
    </div>
  )
}

export default Letter


//per indovinare la lettere 