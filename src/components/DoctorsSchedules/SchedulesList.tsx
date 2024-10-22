import { useState } from "react";
import {
  Button,
  Divider,
  Input,
  Popconfirm,
  Table,
  TableColumnsType,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TSchedule } from "../../types/schedule.type";
import LabonePagination from "../../utils/Pagination/pagination";
import UpdateSchedule from "./UpdateSchedule";
import { TQueryParam } from "../../types/global.type";
import {
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
} from "../../redux/features/schedules/schedulesApi";
import { toast } from "sonner";
import { formatTime } from "./Schedules.constant";

const SchedulesList = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 10 },
  ]);

  const { data, isLoading: isDataLoading } = useGetAllScheduleQuery(params);
  const [deleteSchedule] = useDeleteScheduleMutation();

  const departmentColumns: TableColumnsType<TSchedule> = [
    {
      title: "Doctor Name",
      key: "doctorName",
      width: 350,
      render: (record: TSchedule) => (
        <p>
          {record?.doctorID?.firstName} {record?.doctorID?.lastName}
        </p>
      ),
    },
    {
      title: "Doctor Specialty",
      key: "doctorSpecialty",
      width: 270,
      render: (record) => <p>{record?.doctorID?.specialization}</p>,
    },
    {
      title: "Schedule Day",
      key: "scheduleDay",
      width: 150,
      render: (record: TSchedule) => (
        <p className="capitalize">{record?.scheduleDay}</p>
      ),
    },
    {
      title: "Schedule Time",
      key: "scheduleTime",
      render: (record: TSchedule) => (
        <p>
          {formatTime(record?.startTime)} - {formatTime(record?.endTime)}
        </p>
      ),
      width: 280,
    },
    {
      title: "Action",
      key: "action",
      width: 130,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button onClick={() => handleUpdateData(record)}>
            <FiEdit2 fontSize={16} />
          </Button>
          <Popconfirm
            title="Delete the Department"
            description="Are you sure to delete this Department?"
            placement="topRight"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <AiFillDelete fontSize={16} />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState<TSchedule>({} as TSchedule);

  const handleUpdateData = (schedule: TSchedule) => {
    setUpdateModalOpen(true);
    setScheduleData(schedule);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteSchedule(id).unwrap();
    if (res?.success) {
      toast.success("Schedule Delete Successful");
    } else {
      toast.error("Something want wrong!");
    }
  };

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => {
      const filteredParams = prevParams?.filter(
        (param) => param.name !== "page"
      );

      // Check if "limit" with value 10 exists
      const limitExists = prevParams.some(
        (param) => param.name === "limit" && param.value === 10
      );

      // Build the new params array
      const newParams = [...filteredParams, { name: "page", value: page }];

      // If "limit" with value 10 does not exist, add it
      if (!limitExists) {
        newParams.push({ name: "limit", value: 10 });
      }

      return newParams;
    });
  };

  const meta = data?.data?.meta;
  const result = data?.data?.result;

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-8">
        <div className="grow">
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            Doctor's Schedules List
          </Divider>
        </div>
        <div className="w-[250px]">
          <Input
            type="primary"
            prefix={<IoSearchOutline />}
            placeholder="Search"
            className="focus:placeholder:!text-primary"
            onChange={(e) =>
              setParams([
                { name: "searchTerm", value: e.target.value },
                { name: "limit", value: 10 },
              ])
            }
          />
        </div>
      </div>
      <Table
        columns={departmentColumns}
        dataSource={result}
        scroll={{ x: 900 }}
        pagination={false}
        loading={isDataLoading}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      <UpdateSchedule
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        scheduleData={scheduleData}
      />
    </>
  );
};

export default SchedulesList;
