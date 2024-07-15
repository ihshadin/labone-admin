import { useEffect, useState } from "react";
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

const data = [
  {
    _id: "dept1",
    doctorInfo: {
      _id: "d1",
      fullName: "Dr. John Doe",
      serialNumber: 101,
      contactNumber: 1234567890,
      email: "john.doe@example.com",
      department: "Cardiology",
      specialty: "Cardiologist",
      degree: "MD",
      address: "1234 Elm Street, Springfield, USA",
      doctorImage:
        "https://ritimajans.com/demo/muratgedik/img/demos/medical/doctors/doctor-2.jpg",
    },
    specialty: "Cardiology",
    scheduleDay: "Monday",
    startTime: "12:00",
    startTimePeriod: "dupur",
    endTime: "7:00",
    endTimePeriod: "sondha",
  },
  {
    _id: "dept2",
    doctorInfo: {
      _id: "d2",
      fullName: "Dr. Jane Smith",
      serialNumber: 102,
      contactNumber: 9876543210,
      email: "jane.smith@example.com",
      department: "Neurology",
      specialty: "Neurologist",
      degree: "PhD",
      address: "5678 Oak Street, Springfield, USA",
      doctorImage:
        "https://thumbs.dreamstime.com/b/trust-your-doctor-26219492.jpg",
    },
    specialty: "Neurology",
    scheduleDay: "Wednesday",
    startTime: "10:00",
    startTimePeriod: "sokal",
    endTime: "4:00",
    endTimePeriod: "bikal",
  },
];

const SchedulesList = () => {
  const departmentColumns: TableColumnsType<TSchedule> = [
    {
      title: "Doctor Name",
      dataIndex: "doctorInfo",
      key: "doctorName",
      width: 270,
      render: (record) => <p>{record.fullName}</p>,
    },
    {
      title: "Doctor Specialty",
      dataIndex: "doctorInfo",
      key: "doctorSpecialty",
      render: (record) => <p>{record.specialty}</p>,
    },
    {
      title: "Chamber Day",
      dataIndex: "scheduleDay",
      key: "scheduleDay",
      width: 200,
    },
    {
      title: "Chamber Time",
      key: "scheduleTime",
      width: 280,
      render: (record) => (
        <p className="capitalize">
          {record.startTimePeriod +
            ": " +
            record.startTime +
            " - " +
            record.endTimePeriod +
            ": " +
            record.endTime}
        </p>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
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

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [totalItems, setTotalItems] = useState(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState<TSchedule>({} as TSchedule);

  console.log(isLoading);
  //   Filter on object
  // eslint-disable-next-line prefer-const
  let params: Record<string, unknown> = {};

  if (searchText?.trim() !== "") {
    params.searchTerm = searchText;
  }

  params.limit = 10;
  params.page = currentPage;

  const dataFetch = async () => {
    setIsLoading(true);

    // setDoctorsData();
    setTotalItems(550);
    setItemsPerPage(10);
    setIsLoading(false);
  };

  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, currentPage, scheduleData]);

  const handleUpdateData = (schedule: TSchedule) => {
    setUpdateModalOpen(true);
    setScheduleData(schedule);
    // console.log("Edit", schedule);
  };

  const handleDelete = (id: string) => {
    // Handle delete action
    console.log("Delete", id);
  };

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-8">
        <div className="grow">
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            Chamber Doctor's Schedules List
          </Divider>
        </div>
        <div className="w-[250px]">
          <Input
            type="primary"
            prefix={<IoSearchOutline />}
            placeholder="Search"
            className="focus:placeholder:!text-primary"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <Table
        columns={departmentColumns}
        dataSource={data}
        scroll={{ x: 900 }}
        pagination={false}
      />
      <LabonePagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
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
