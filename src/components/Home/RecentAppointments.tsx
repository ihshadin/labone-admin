/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import { Table, TableColumnsType, TableProps } from "antd";
import { TAppointment } from "../../types/appointment.type";
import { useGetRecentAppointmentDataQuery } from "../../redux/features/meta/metaApi";

const RecentAppointments = () => {
  const {data} = useGetRecentAppointmentDataQuery(undefined);
  
  const columns: TableColumnsType<TAppointment> = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      width: 170,
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    // },
    {
      title: "Mobile",
      dataIndex: "mobileNumber",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
    },
    {
      title: "Status",
      key: "status",
      fixed: "right",
      width: 105,
      render: (record: TAppointment) => {
        return (
          <span>
            <div
              className={`flex items-center justify-center py-0.5 px-1.5 capitalize text-xs font-medium text-accent border border-gray-200 rounded-md ${
                record?.status === "cancel" && "!border-secondary/20"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full inline-block mr-1.5 ${
                  record?.status === "approve" ? "bg-teal-600" : "bg-red-500"
                }`}
              ></span>
              {record?.status}
            </div>
          </span>
        );
      },
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     _id: "01",
  //     patientName: "Mukta Khatun",
  //     address: "Mozarmil Bus Stand, Kashimpur, Gazipur.",
  //     mobile: "01829566586",
  //     date: "02/05/2024",
  //     department: "Gynecology",
  //     doctor: "Dr. Arifa Akhter",
  //     message:
  //       "Your recent test results are available. Please visit the clinic for a detailed discussion.",
  //     status: "cancel",
  //   },
  //   {
  //     key: "2",
  //     _id: "02",
  //     patientName: "Rahim Uddin",
  //     address: "Dhanmondi, Dhaka.",
  //     mobile: "01711223344",
  //     date: "03/05/2024",
  //     department: "Cardiology",
  //     doctor: "Dr. Mahmudul Hasan",
  //     message:
  //       "Your recent test results are available. Please visit the clinic for a detailed discussion.",
  //     status: "pending",
  //   },
  //   {
  //     key: "3",
  //     _id: "03",
  //     patientName: "Ayesha Siddiqua",
  //     address: "Uttara, Dhaka.",
  //     mobile: "01999887766",
  //     date: "04/05/2024",
  //     department: "Pediatrics",
  //     doctor: "Dr. Jannatul Ferdous",
  //     message:
  //       "Your child's vaccination schedule is due next week. Please book an appointment.",
  //     status: "cancel",
  //   },
  //   {
  //     key: "4",
  //     _id: "04",
  //     patientName: "Karim Hossain",
  //     address: "Chittagong Road, Narayanganj.",
  //     mobile: "01612345678",
  //     date: "05/05/2024",
  //     department: "Orthopedics",
  //     doctor: "Dr. Anisur Rahman",
  //     message:
  //       "The X-ray reports are ready. Kindly collect them from the reception.",
  //     status: "approve",
  //   },
  //   {
  //     key: "5",
  //     _id: "05",
  //     patientName: "Sumaiya Begum",
  //     address: "Sylhet Sadar, Sylhet.",
  //     mobile: "01876543210",
  //     date: "06/05/2024",
  //     department: "Dermatology",
  //     doctor: "Dr. Fatema Tuz Zohra",
  //     message:
  //       "Your follow-up appointment is scheduled for next Monday. Please confirm your availability.",
  //     status: "pending",
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);
  const dataFetch = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.data}
        scroll={{ x: 950 }}
        pagination={false}
        onChange={onChange}
      />
    </>
  );
};

export default RecentAppointments;
