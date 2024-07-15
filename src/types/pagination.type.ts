import { Dispatch } from "react";

export type TPagination = {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
};
