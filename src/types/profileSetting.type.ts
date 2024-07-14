import { Dispatch } from "react";

export type TProfile = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userImage: string;
};
export type TUpdateProfile= {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  profileData: TProfile;
};
