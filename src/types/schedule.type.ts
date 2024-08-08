import { Dispatch } from "react";
import { TDoctor } from "./doctor.type";

export type TSchedule = {
  _id: string;
  doctorID?: TDoctor;
  scheduleDay: string;
  startTime: string;
  endTime: string;
};

export type TUpdateSchedule = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  scheduleData: TSchedule;
};
