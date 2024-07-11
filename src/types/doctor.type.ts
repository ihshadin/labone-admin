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
  doctorImage?: string;
};
