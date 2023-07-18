import React, { useState, useEffect } from 'react';

const Counter = ({Number}) => {
  const [number, setNumber] = useState(Number >= 100 ? Number - 100 : 0); 
  const targetNumber = Number; 

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1);
    
    if (number === targetNumber) {
      clearInterval(interval);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [number, targetNumber]);

  return <h1>{number}</h1>;
};

export default Counter;
