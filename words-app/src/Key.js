import React,{useContext} from 'react'
import {AppContext} from './App'



function Key({keyval,otherkey}) {
    const {board,setBoard,currentAttempt,setCurrentAttempt} = useContext(AppContext);


    const selectLetter = ()=>{
        if(keyval === "ENTER"){
            if (currentAttempt.letterPos !== 5) return;
            setCurrentAttempt({attempt:currentAttempt.attempt +1,letterPos:0})

            //funzionalità di enter:non funziona se non si completa la parola
            //attempt + 1 significa che non rimango sempre nella pos [0,0]
            //ma va avanti
        }
        else if(keyval === "DELETE"){
            if(currentAttempt.letterPos === 0) return;
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPos -1]= ""; //mi ritorna una stringa vuota
            setBoard(newBoard)
            setCurrentAttempt({...currentAttempt,letterPos: currentAttempt.letterPos -1})

        }
        else{
            if (currentAttempt.letterPos >4) return;
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPos]= keyval // ho fatto in modo di mettere alla posizione 0,0 della matrice il mio keyval
                                   // ovvero qualsiasi tasto io prema
            setBoard(newBoard)
            setCurrentAttempt({...currentAttempt,letterPos:currentAttempt.letterPos +1})
        }
      
    };
  return (
  <div className="key" id={otherkey && "big"}
  onClick = {selectLetter}>
    {keyval}
</div>
)}

export default Key