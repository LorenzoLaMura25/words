import React from 'react'

const Keyboard = () => {

    const keyb1= ["Q","W","E","R","T","Y","U","I","O","P"]
    const keyb2 =["A","S","D","F","G","H","J","K","L"]
    const keyb3 =["Z","X","C","V","B","N","M"]
  return (
    <div className="Keyboard">
        <div className="linea1">
         <div>{keyb1}</div>
        </div>
        <div className="linea2">
            <div>{keyb2}</div>
            
        </div>
        <div className="linea3">
         <div>{keyb3}</div>
            
        </div>
    </div>
  )
}

export default Keyboard