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

export const formatTime = (time: any) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };