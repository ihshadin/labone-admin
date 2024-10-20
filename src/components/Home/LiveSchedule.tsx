import { Table, TableColumnsType } from "antd";
import { useGetLiveSchedulesDataQuery } from "../../redux/features/meta/metaApi";
import { TSchedule } from "../../types/schedule.type";

const LiveSchedule = () => {
  const { data } = useGetLiveSchedulesDataQuery(undefined);
  console.log("Live Schedules", data);
  const columns: TableColumnsType<TSchedule> = [
    {
      title: "Doctor Name",
      dataIndex: "patientName",
      width: 170,
    },
    {
      title: "Doctor Specialty",
      dataIndex: "mobileNumber",
    },
    {
      title: "Schedule Time",
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
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data?.data}
        scroll={{ x: 950 }}
        pagination={false}
      />
    </div>
  );
};

export default LiveSchedule;
