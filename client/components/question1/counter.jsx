import { useState, useEffect } from 'react';

export const Counter = ({ min, max }) => {
  const [number, setNumber] = useState();

  const Increment = () => {
    if (number + 1 > max) {
      return;
    } else {
      setNumber(number + 1);
    }
  };

  const Decrement = () => {
    if (number - 1 < min) {
      return;
    } else {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    setNumber(0);
    if (min > 0) {
      setNumber(min);
    } else if (max < 0) {
      setNumber(max);
    }
  }, []);

  return (
    <div>
      <p className="font-bold">{number}</p>
      <button onClick={() => Increment()} className="bg-gray-600 m-1 p-2 rounded-lg text-white">
        Increment
      </button>
      <button onClick={() => Decrement()} className="bg-gray-600 m-1 p-2 rounded-lg text-white">
        Decrement
      </button>
    </div>
  );
};
