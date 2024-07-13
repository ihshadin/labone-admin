import { Dispatch } from "react";

export type TDoctor = {
  _id: string;
  fullName: string;
  serialNumber: number;
  contactNumber: number;
  email?: string;
  department: string;
  specialty: string;
  degree: string;
  address?: string;
  doctorImage: string;
};
export type TUpdateDoctor = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  doctorData: TDoctor;
};
