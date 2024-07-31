/* eslint-disable @typescript-eslint/no-explicit-any */
export const Dayes = [
  {
    value: "saturday",
    label: "Saturday",
  },
  {
    value: "sunday",
    label: "Sunday",
  },
  {
    value: "monday",
    label: "Monday",
  },
  {
    value: "tuesday",
    label: "Tuesday",
  },
  {
    value: "wednesday",
    label: "Wednesday",
  },
  {
    value: "thursday",
    label: "Thursday",
  },
  {
    value: "friday",
    label: "Friday",
  },
];

// formatTime function to handle time strings correctly
export const formatTime = (time: any) => {
  // Handle cases where time might already be in a valid date format
  const parsedTime = Date.parse(time);

  // If time is a valid date string
  if (!isNaN(parsedTime)) {
    const date = new Date(parsedTime);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  // Handle cases where time is a time string like "5:29 PM"
  const date = new Date();
  const [hours, minutesPart] = time.split(":");
  const minutes = minutesPart.slice(0, 2);
  const ampm = minutesPart.slice(3).toUpperCase();

  date.setHours(ampm === "PM" ? parseInt(hours, 10) + 12 : parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
