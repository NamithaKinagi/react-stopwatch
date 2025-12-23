import { useState, useRef, useEffect } from "react";

const STORAGE_KEY = "stopwatch-time";

export function useStopWatch() {
  const [seconds, setSeconds] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? Number(stored) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, seconds.toString());
  }, [seconds]);

  return { seconds, isRunning, start, stop, reset };
}
