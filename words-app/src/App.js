
import './App.css';
import Board from './Board';
import Keyboard from './Keyboard';
import {createContext,useState} from 'react';
import { boardDefault } from './Matrix';

export const AppContext = createContext();

function App() {
  const[board,setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
