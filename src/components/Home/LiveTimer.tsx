import React, { useEffect, useState } from "react";

const LiveTimer: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTimeParts = (date: Date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // the hour '0' should be '12'
    return {
      dayName,
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      ampm,
    };
  };

  const { dayName, hours, minutes, seconds, ampm } = formatTimeParts(time);

  return (
    <div className="flex items-center gap-2 text-base font-medium *:py-1 *:px-2 *:rounded-lg *:border *:border-primary/20 [&_>_*:hover]:border-primary/40 [&_>_*:hover]:bg-primary/5 *:cursor-pointer">
      <span>{dayName}</span>
      <span>{hours}</span>
      <span>{minutes}</span>
      <span>{seconds}</span>
      <span>{ampm}</span>
    </div>
  );
};

export default LiveTimer;