// src/App.js
import React from 'react';
import SlotMachineComponent from './SlotMachine';
import SlotMachineAnimation from './SlotMachineAnimation';
import GuessNumber from './GuessNumber';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App'>
        <h1>  Slot Machine</h1>
        <SlotMachineComponent />

      </div>
      <div className='App'>
        <h1>slot Machine</h1>
        <SlotMachineAnimation />
      </div>

      <div className='App'>
        <GuessNumber />
      </div>

      
      <MemoryCardGame />

    </div>
  );
}

export default App;
