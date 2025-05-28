import React, { useEffect, useState, useRef } from "react";

interface CountdownClockProps {
  startTime: Date | string | null;
  duration: number | null; // in minutes
  onComplete?: () => void; // optional callback
}

const CountdownClock: React.FC<CountdownClockProps> = ({ startTime, duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState("00:00");
  const hasCompleted = useRef(false);

  useEffect(() => {
    if (!startTime || !duration) return;

    const endTime = new Date(new Date(startTime).getTime() + duration * 60 * 1000);

    const updateClock = () => {
      const now = new Date();
      const remainingMs = endTime.getTime() - now.getTime();

      if (remainingMs <= 0) {
        if (!hasCompleted.current) {
          hasCompleted.current = true;
          setTimeLeft("00:00");
          if (onComplete) onComplete();
        }
        return;
      }

      const minutes = Math.floor(remainingMs / (1000 * 60));
      const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

      setTimeLeft(`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // Initial call

    return () => clearInterval(interval);
  }, [startTime, duration, onComplete]);

  return (
    <p className="w-fit text-center bg-accent text-accent-foreground text-2xl px-5 py-2 rounded-lg font-bold">
      {timeLeft}
    </p>
  );
};

export default CountdownClock;
