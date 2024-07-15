import { Dispatch } from "react";

export type TForgetPass = {
  _id: string;
  newPassword : string;
  confirmPassword : string;

};
export type TUpdateForgetPass= {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  changePassData: TForgetPass;
};