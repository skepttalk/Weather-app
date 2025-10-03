import React, { useState, useMemo } from 'react';

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const factorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>

      <h2>Factorial: {fact}</h2>
    </div>
  );
};

export default MemoExample;
