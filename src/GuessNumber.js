import React, { useState } from 'react';

const GuessNumber = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guess, 10);
    if (isNaN(guessNumber)) {
      setMessage('Please enter a valid number.');
      return;
    }
    setAttempts(attempts + 1);
    if (guessNumber === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (guessNumber < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div style={styles.container}>
      <h1>Guess the Number</h1>
      <form onSubmit={handleGuessSubmit} style={styles.form}>
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          style={styles.input}
          placeholder="Enter your guess"
        />
        <button type="submit" style={styles.button}>
          Guess
        </button>
      </form>
      <p style={styles.message}>{message}</p>
      <button onClick={handleReset} style={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  form: {
    margin: '20px 0',
  },
  input: {
    fontSize: '20px',
    padding: '10px',
    marginRight: '10px',
  },
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  message: {
    fontSize: '24px',
    marginTop: '20px',
  },
  resetButton: {
    marginTop: '20px',
    fontSize: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default GuessNumber;
