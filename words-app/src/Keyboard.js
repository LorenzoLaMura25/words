import React from 'react'
import Key from './Key';

const Keyboard = () => {

    const keys1= ["Q","W","E","R","T","Y","U","I","O","P"]
    const keys2 =["A","S","D","F","G","H","J","K","L"]
    const keys3 =["Z","X","C","V","B","N","M"]
    const keys4 = ["ENTER","DELETE"]
  return (
    <div className="Keyboard">
        <div className="linea1">
            {keys1.map((key)=>{
            return <Key keyval={key}/>;
            })}
        </div>
        <div className="linea2">
            {keys2.map((key)=>{
                 return <Key keyval={key}/>;
            })}
        </div>
        <div className="linea3">
            {keys3.map((key)=>{
                 return <Key keyval={key}/>;
            })}
        </div>

        <div className="linea3">
            {keys4.map((key)=>{
                 return <Key keyval={key}/>;
            })}
        </div>
    </div>
  )
}

export default Keyboard