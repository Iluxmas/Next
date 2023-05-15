import React, { useEffect, useRef, useState } from 'react';

function Test({ number, str }: { number: number; str: string }) {
  // const [amount, setAmount] = useState(0);

  const testRef = useRef<number | undefined>();

  useEffect(() => {
    console.log('useEffect');
    // console.log(number);
    // console.log(testRef.current);
    if (number != testRef.current) {
      console.log('number changes');
    }
    testRef.current = number;
  });

  return (
    <div>
      <h1>{number}</h1>
      <button>LOG VIEW</button>
    </div>
  );
}

export default Test;
