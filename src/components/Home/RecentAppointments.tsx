import { Table, TableColumnsType } from "antd";
import { TAppointment } from "../../types/appointment.type";
import { useGetRecentAppointmentDataQuery } from "../../redux/features/meta/metaApi";
import { TDoctor } from "../../types/doctor.type";

const RecentAppointments = () => {
  const { data } = useGetRecentAppointmentDataQuery(undefined);
  console.log("Recent Appointments", data);
  const columns: TableColumnsType<TAppointment> = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      width: 170,
    },
    {
      title: "Mobile",
      dataIndex: "mobileNumber",
    },
    {
      title: "Date",
      dataIndex: "appointmentDate",
      render: (record: string) => {
        const dateObj = new Date(record);

        const day = String(dateObj.getUTCDate()).padStart(2, "0");
        const month = dateObj.toLocaleString("en-US", { month: "short" });
        const year = dateObj.getUTCFullYear();

        const formattedDate = `${day} ${month} ${year}`;

        return <span>{formattedDate}</span>;
      },
    },
    {
      title: "Doctor",
      dataIndex: "doctorID",
      render: (record: TDoctor) => {
        return <span>{record?.firstName + " " + record?.lastName}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      fixed: "right",
      width: 105,
      render: (record: string) => {
        return (
          <span>
            <div className="flex items-center justify-center py-0.5 px-1.5 capitalize text-xs font-medium text-accent border border-gray-200 rounded-md">
              <span
                className={`w-1.5 h-1.5 rounded-full inline-block mr-1.5 ${
                  record === "approve" ? "bg-teal-600" : "bg-red-500"
                }`}
              ></span>
              {record}
            </div>
          </span>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.data}
        scroll={{ x: 950 }}
        pagination={false}
      />
    </>
  );
};

export default RecentAppointments;
