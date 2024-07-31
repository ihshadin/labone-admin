import { Dispatch } from "react";

export type TDepartment = {
  _id: string;
  name: string;
  icon?: string;
  details?: string;
};

export type TUpdateDepartment = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  departmentData: TDepartment;
};
