// src/SlotMachine.js
import React, { useState } from 'react';
import SlotMachine from 'react-slot-machine';
import './SlotMachine.css';

function SlotMachineComponent() {
  const items = ['🍒', '🍋', '🍉', '🍇', '🍓'];
  const [result, setResult] = useState(['❓', '❓', '❓']);

  const spin = () => {
    const newResult = [
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)],
    ];
    setResult(newResult);
  };

  return (
    <div className="slot-machine">
      <div className="SlotMachine">
        {result.map((item, index) => (
          <div key={index} className="SlotMachine-reel">
            {item}
          </div>
        ))}
      </div>
      <button onClick={spin}>Spin</button>
    </div>
  );
}

export default SlotMachineComponent;
