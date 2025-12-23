import { useStopWatch } from "./customHook/useStopWatch";

function App() {
  const { seconds, isRunning, start, stop, reset } = useStopWatch();
  
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Seconds: {formatTime(seconds)}</p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
