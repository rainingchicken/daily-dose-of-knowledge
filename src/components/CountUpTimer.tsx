import { Timer } from "lucide-react";
import React, { useEffect } from "react";

interface StopwatchTimerProp {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  hasSubmitted: boolean;
}

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function CountUpTimer({ time, setTime, hasSubmitted }: StopwatchTimerProp) {
  useEffect(() => {
    if (hasSubmitted) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime, hasSubmitted]);

  return (
    <div className="items-center gap-1 text-info font-bold flex justify-end p-1">
      <Timer size={16} /> {formatTime(time)}
    </div>
  );
}

export default CountUpTimer;
