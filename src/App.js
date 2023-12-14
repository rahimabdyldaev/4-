import React, { useState, useEffect } from 'react';

function App() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    setResults(prevResults => [time, ...prevResults]);
    setTime(0);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Секундомер</h1>
      <p>Время: {time} сек.</p>
      <button onClick={handleStart}>Старт</button>
      <button onClick={handleStop}>Стоп</button>
      <button onClick={handleReset}>Сброс</button>
      <h2>Последние результаты:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result} сек.</li>
        ))}
      </ul>
    </div>
  );
}

export default App;