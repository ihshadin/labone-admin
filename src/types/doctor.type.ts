import { Dispatch } from "react";

export type TDoctor = {
  _id: string;
  firstName: string;
  lastName: string;
  serialNumber: number;
  contactNumber: number;
  email?: string;
  department: string;
  specialization: string;
  degree: string;
  address?: string;
  image?: string;
  departmentID: TDepartment;
};

export type TDepartment = {
  _id: string;
  name: string;
  icon: string;
  details: string;
  isDeleted: boolean;
};

export type TUpdateDoctor = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  doctorData: TDoctor;
};
