import { TDoctor } from "./doctor.type";

export type TSchedule = {
  _id: string;
  doctorInfo?: TDoctor;
  specialty: string;
  scheduleDay:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  startTime: string;
  startTimePeriod: "sokal" | "dupur" | "bikal" | "sondha" | "rat";
  endTime: string;
  endTimePeriod: "sokal" | "dupur" | "bikal" | "sondha" | "rat";
};
