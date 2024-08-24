import { Dispatch } from "react";
export type TGallery = {
  _id: string;
  photo: string;
  title?: string;
  category: string;
};

export type TUpdateGallery = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  galleryData: TGallery;
};
