import React,{useContext} from 'react'
import {AppContext} from './App'



function Key({keyval,otherkey}) {
    const {board,setBoard,currentAttempt,setCurrentAttempt} = useContext(AppContext);


    const selectLetter = ()=>{
        if(keyval === "ENTER"){
            if (currentAttempt.letterPos !== 5) return;
            setCurrentAttempt({attempt:currentAttempt.attempt +1,letterPos:0})
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