import React, { useState } from 'react';

const symbols = ['🍒', '🍋', '🍊', '🍉', '🔔', '⭐'];

const SlotMachineAnimation = () => {
  const [reels, setReels] = useState(['🍒', '🍒', '🍒']);
  const [result, setResult] = useState('');

  const spin = () => {
    const newReels = reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    setReels(newReels);
    checkResult(newReels);
  };

  const checkResult = (newReels) => {
    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      setResult('You win!');
    } else {
      setResult('Try again!');
    }
  };

  return (
    <div>
      <div className="slot-machine">
        {reels.map((symbol, index) => (
          <span key={index}>{symbol}</span>
        ))}
      </div>
      <button onClick={spin}>Spin</button>
      <p>{result}</p>
    </div>
  );
};

export default SlotMachineAnimation;
