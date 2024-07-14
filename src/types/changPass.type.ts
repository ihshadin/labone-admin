import { Dispatch } from "react";

export type TChangePass = {
  _id: string;
  currentPassword: string;
  newPassword : string;
  confirmPassword : string;

};
export type TUpdatePass= {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  changePassData: TChangePass;
};