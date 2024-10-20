import { Dispatch } from "react";

export type TUsers = {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  userImage: string;
  password?: string;
  status: "owner" | "admin" | "patient";
};
export type TUsersData= {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  profileData: TUsers;
};
