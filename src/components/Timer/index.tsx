import React, { useState } from 'react';
import { useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);


  return (
    <div>
        <p>
          Time elapsed: {time}s
        </p>
    </div>
  );
}

export default Timer;
