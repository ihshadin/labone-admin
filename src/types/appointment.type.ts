import { Dispatch } from "react";

export type TAppointment = {
  _id: string;
  patientName: string;
  address: string;
  mobile: number;
  date: string;
  department: string;
  doctor: string;
  message: string;
  status: "cancel" | "approve" | "pending";
};

export type TAppointments = {
  _id: string;
  patientName: string;
  address: string;
  mobile: number;
  date: string;
  department: string;
  doctor: string;
  message: string;
  status: string;
};


export type TViewAppointmentModal = {
  viewDetailsModalOpen: boolean;
  setViewDetailsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  appointmentData: TAppointment;
};
