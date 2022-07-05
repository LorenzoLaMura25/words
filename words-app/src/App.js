
import './App.css';
import Board from './Board';
import Keyboard from './Keyboard';
import {createContext,useState} from 'react';
import { boardDefault} from './Matrix';

export const AppContext = createContext();


function App() {
  const[board,setBoard] = useState(boardDefault);
  const[currentAttempt,setCurrentAttempt] = useState({attempt:0,letterPos:0})
  const correctWord = "RIGHT";
  
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt,correctWord}}>
        <div className="game">
          <Board/>
          <Keyboard/>
        </div>
       
      </AppContext.Provider>
    </div>
  );
}

export default App;
