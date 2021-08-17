import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function FastState() {
  const [value, setValue] = useState(0);
  const valueWithRef = useRef(0)
  const [number,setNumber] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        setTimeout(() => {
            setValue(value + 1);
            setNumber(valueWithRef.current + value);
        }, 1000);
    }, 100);
    return () => clearInterval(intervalId);
  }, [value, setValue])

  return (
    <div>
        <p>
          Fast State: {value}
          <br />
          Fast State Correct: {number}
        </p>
    </div>
  );
}

export default FastState;
