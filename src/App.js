import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [count, setCount] = useState([]);

  const Task = (value) => {
    let number = Number(value);

    if (number < 0) {
      setCount(['Enter The Positive number']);
    } else {
      ValidateNumbers(number);
    }
  };

  const ValidateNumbers = (a) => {
    const newNumbers = [];

    if (a % 2 === 0) {
      let nextEven = a + 2;
      for (let i = 0; i < 3; i++) {
        newNumbers.push(nextEven);
        nextEven += 2;
      }
    } else {
      let nextOdd = a + 2;
      for (let i = 0; i < 3; i++) {
        newNumbers.push(nextOdd);
        nextOdd += 2;
      }
    }

    setCount(newNumbers);
  };

  return (
    <div>
      <input 
        type="number" 
        onChange={(e) => Task(e.target.value)} 
      />
      <h1>{count.join(', ')}</h1>
    </div>
  );
};

export default App;
