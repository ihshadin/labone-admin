import { Dispatch } from "react";
import { TDoctor } from "./doctor.type";

export type TAppointment = {
  _id: string;
  patientName: string;
  address: string;
  mobileNumber: number;
  appointmentDate: string;
  department: string;
  doctorID: TDoctor;
  message: string;
  status: "cancel" | "approve" | "pending";
};

export type TViewAppointmentModal = {
  viewDetailsModalOpen: boolean;
  setViewDetailsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  appointmentData: TAppointment;
};
