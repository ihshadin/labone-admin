import { IMeta } from "./global.type";

export type TPagination = {
  meta: IMeta;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePaginationChange: (value: number) => void;
};
