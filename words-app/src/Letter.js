import React,{useContext}from 'react';

import {AppContext} from './App';

//serve per capire se la lettera è corretta ed è nella posizione giusta,
//se è giusta ma nella posizione sbagliata,
// e se è errrata

function Letter ({letterPos,attemptValue}) {
  const {board,correctWord,currentAttempt} = useContext(AppContext);
  const letter = board[attemptValue][letterPos];


  const correct = correctWord.toUpperCase()[letterPos] === letter; //se è uguale alla lettera dentro la cell

  const almost = !correct && letter !== "" && correctWord.includes(letter); //non dve essere corretta e la cell non deve essere vuota
                                                                            //e la parola dve includere questa lettera

  const letterState = 
  currentAttempt.attempt > attemptValue &&(correct ? "correct" : almost ? "almost": "error"); 

  //se è corretta lettrstte viene settato a correct,se non è vero,dobbimo chiederci se almost è true
  //allora letterState viene settato ad almost,altrimenti 


  return (
    <div className="letter" id={letterState}>
      {""}
      {letter}
    </div>
  )
}

export default Letter


//per indovinare la lettere 