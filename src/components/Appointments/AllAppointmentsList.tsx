/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  MenuProps,
  Popconfirm,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { TAppointment } from "../../types/appointment.type";
import AppointmentDetails from "./AppointmentDetails";
import LabonePagination from "../../utils/Pagination/pagination";

const AllAppointmentsList = () => {
  const statusItems: MenuProps["items"] = [
    {
      label: (
        <div className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
          Approve
        </div>
      ),
      key: "approve",
    },
    {
      label: (
        <span className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          Cancel
        </span>
      ),
      key: "cancel",
    },
  ];
  const columns: TableColumnsType<TAppointment> = [
    {
      title: "SL",
      dataIndex: "key",
      width: 50,
      align: "center",
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      width: 170,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
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
      title: "Message",
      dataIndex: "message",
      width: 350,
    },
    {
      title: "Status",
      key: "status",
      fixed: "right",
      width: 140,
      render: (record: TAppointment) => {
        return (
          <Dropdown
            menu={{
              items: statusItems,
              onClick: (data) => handleUpdateStatus(data.key, record?._id),
            }}
            trigger={["click"]}
            disabled={record?.status === "cancel"}
          >
            <span>
              <div
                className={`flex items-center justify-between py-1 px-2 capitalize text-sm font-medium text-accent border border-gray-200 rounded-lg ${
                  record?.status === "cancel" &&
                  "!border-secondary/20 !justify-center"
                }`}
              >
                <div>
                  <span
                    className={`w-2 h-2 rounded-full inline-block mr-2 ${
                      record?.status === "approve"
                        ? "bg-teal-600"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {record?.status}
                </div>
                {record?.status === "cancel" || <IoIosArrowDown />}
              </div>
            </span>
          </Dropdown>
        );
      },
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Approve",
          value: "approve",
        },
        {
          text: "Cancel",
          value: "cancel",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      fixed: "right",
      width: 150,
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button onClick={() => handleViewDetails(record)}>View</Button>
          <Popconfirm
            title="Delete the appointment"
            description="Are you sure to delete this appointment?"
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
  const data = [
    {
      key: "1",
      _id: "01",
      patientName: "Mukta Khatun",
      address: "Mozarmil Bus Stand, Kashimpur, Gazipur.",
      mobile: "01829566586",
      date: "02/05/2024",
      department: "Gynecology",
      doctor: "Dr. Arifa Akhter",
      message:
        "Your recent test results are available. Please visit the clinic for a detailed discussion.",
      status: "cancel",
    },
    {
      key: "2",
      _id: "02",
      patientName: "Rahim Uddin",
      address: "Dhanmondi, Dhaka.",
      mobile: "01711223344",
      date: "03/05/2024",
      department: "Cardiology",
      doctor: "Dr. Mahmudul Hasan",
      message:
        "Your recent test results are available. Please visit the clinic for a detailed discussion.",
      status: "pending",
    },
    {
      key: "3",
      _id: "03",
      patientName: "Ayesha Siddiqua",
      address: "Uttara, Dhaka.",
      mobile: "01999887766",
      date: "04/05/2024",
      department: "Pediatrics",
      doctor: "Dr. Jannatul Ferdous",
      message:
        "Your child's vaccination schedule is due next week. Please book an appointment.",
      status: "cancel",
    },
    {
      key: "4",
      _id: "04",
      patientName: "Karim Hossain",
      address: "Chittagong Road, Narayanganj.",
      mobile: "01612345678",
      date: "05/05/2024",
      department: "Orthopedics",
      doctor: "Dr. Anisur Rahman",
      message:
        "The X-ray reports are ready. Kindly collect them from the reception.",
      status: "approve",
    },
    {
      key: "5",
      _id: "05",
      patientName: "Sumaiya Begum",
      address: "Sylhet Sadar, Sylhet.",
      mobile: "01876543210",
      date: "06/05/2024",
      department: "Dermatology",
      doctor: "Dr. Fatema Tuz Zohra",
      message:
        "Your follow-up appointment is scheduled for next Monday. Please confirm your availability.",
      status: "pending",
    },
    {
      key: "6",
      _id: "06",
      patientName: "Hassan Ali",
      address: "Banani, Dhaka.",
      mobile: "01722334455",
      date: "07/05/2024",
      department: "Neurology",
      doctor: "Dr. Rafiqul Islam",
      message:
        "Please bring your previous medical records during your next visit.",
      status: "cancel",
    },
    {
      key: "7",
      _id: "07",
      patientName: "Fatema Khatun",
      address: "Mirpur, Dhaka.",
      mobile: "01633445566",
      date: "08/05/2024",
      department: "Ophthalmology",
      doctor: "Dr. Farzana Rahman",
      message:
        "Your eye examination results are ready. Please collect them from the clinic.",
      status: "approve",
    },
    {
      key: "8",
      _id: "08",
      patientName: "Rashid Khan",
      address: "Bashundhara, Dhaka.",
      mobile: "01944556677",
      date: "09/05/2024",
      department: "Dentistry",
      doctor: "Dr. Kamrul Hasan",
      message:
        "Your dental procedure has been scheduled for next Wednesday. Please confirm your attendance.",
      status: "pending",
    },
    {
      key: "9",
      _id: "09",
      patientName: "Shabana Akter",
      address: "Gulshan, Dhaka.",
      mobile: "01855667788",
      date: "10/05/2024",
      department: "ENT",
      doctor: "Dr. Nasima Sultana",
      message:
        "Please visit the clinic for a follow-up regarding your recent ENT examination.",
      status: "cancel",
    },
    {
      key: "10",
      _id: "10",
      patientName: "Nasir Uddin",
      address: "Farmgate, Dhaka.",
      mobile: "01766778899",
      date: "11/05/2024",
      department: "Psychiatry",
      doctor: "Dr. Sharmin Akhter",
      message:
        "Your counseling session is scheduled for next Friday. Please ensure to be on time.",
      status: "approve",
    },
  ];

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState<TAppointment>(
    {} as TAppointment
  );

  console.log(isLoading);
  let params: Record<string, unknown> = {};
  params.limit = 10;
  params.page = currentPage;
  const dataFetch = async () => {
    setIsLoading(true);

    // setDoctorsData();
    setTotalItems(550);
    setItemsPerPage(10);
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
  const handleUpdateStatus = async (data: string, id: string) => {
    console.log(data);
    console.log(id);

    // const tostId = toast.loading("Status Updating...");
    // try {
    // const payload = {
    //     id,
    //     data: { status: data?.key },
    //   };

    //   const res = await updateAdaptionStatus(payload).unwrap();
    //   res && toast.success("Status Updated", { id: tostId, duration: 2000 });
    // } catch (error) {
    //   console.log("error---=>", error);
    //   toast.error("something went wrong", { id: tostId, duration: 2000 });
    // }
  };
  const handleViewDetails = (appointment: TAppointment) => {
    setViewDetailsModalOpen(true);
    setAppointmentData(appointment);
    console.log("Edit", appointment);
  };
  const handleDelete = (id: string) => {
    // Handle delete action
    console.log("Delete", id);
  };

  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-7">
        <div className="grow">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Appointments list
          </Divider>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
        scroll={{ x: 1800 }}
      />
      <LabonePagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <AppointmentDetails
        viewDetailsModalOpen={viewDetailsModalOpen}
        setViewDetailsModalOpen={setViewDetailsModalOpen}
        appointmentData={appointmentData}
      />
    </>
  );
};

export default AllAppointmentsList;
