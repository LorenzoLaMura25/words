
import Letter from './Letter';
import React from 'react'



//ogni parola può essere rappresentata da un array 
// ad esempio parola ["p","a","r","o","l","a"]
//5 tentativi. una matrice  

const Board = () => {
   

    
  return (
    <div className="board">
        <div className="row">
            <Letter letterPos={0} attemptValue={0}/>
            <Letter letterPos={1} attemptValue={0}/>
            <Letter letterPos={2} attemptValue={0}/>
            <Letter letterPos={3} attemptValue={0}/>
            <Letter letterPos={4} attemptValue={0}/>
            
        </div>
        <div className="row">
            <Letter letterPos={0} attemptValue={1}/>
            <Letter letterPos={1} attemptValue={1}/>
            <Letter letterPos={2} attemptValue={1}/>
            <Letter letterPos={3} attemptValue={1}/>
            <Letter letterPos={4} attemptValue={1}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptValue={2}/>
            <Letter letterPos={1} attemptValue={2}/>
            <Letter letterPos={2} attemptValue={2}/>
            <Letter letterPos={3} attemptValue={2}/>
            <Letter letterPos={4} attemptValue={2}/>
         </div>
        <div className="row">
            <Letter letterPos={0} attemptValue={3}/>
            <Letter letterPos={1} attemptValue={3}/>
            <Letter letterPos={2} attemptValue={3}/>
            <Letter letterPos={3} attemptValue={3}/>
            <Letter letterPos={4} attemptValue={3}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptValue={4}/>
            <Letter letterPos={1} attemptValue={4}/>
            <Letter letterPos={2} attemptValue={4}/>
            <Letter letterPos={3} attemptValue={4}/>
            <Letter letterPos={4} attemptValue={4}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptValue={5}/>
            <Letter letterPos={1} attemptValue={5}/>
            <Letter letterPos={2} attemptValue={5}/>
            <Letter letterPos={3} attemptValue={5}/>
            <Letter letterPos={4} attemptValue={5}/>
        </div>
    </div>
  )
}

export default Board


//essendo un array fa da 5 lettere vanno da 0 a 4 
//le posizioni vanno da 0 a 4 
//LetterpOS è 0 perchè è la prima lettera
//attemptvalue è il numro di tentativi

