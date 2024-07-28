/* eslint-disable prefer-const */
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
import { TAppointment } from "../../types/appointment.type";
import AppointmentDetails from "./AppointmentDetails";
import LabonePagination from "../../utils/Pagination/pagination";
import { TQueryParam } from "../../types/global.type";
import { IoSearchOutline } from "react-icons/io5";

const PendingAppointmentsList = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);

    console.log(params)

 
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
      width: 120,
      render: (record: TAppointment) => {
        return (
            <div className="flex items-center justify-center border rounded-md px-2 py-1">
                 <div
                  className={`bg-red-500 h-3 w-3 rounded-full mr-2`}
                 ></div>
                   <p className="capitalize">{record?.status}</p>
              </div>
        );
      }, 
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      fixed: "right",
      width: 140,
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState<TAppointment>(
    {} as TAppointment
  );

  console.log(isLoading);

  const dataFetch = async () => {
    setIsLoading(true);

    // setDoctorsData();
    setTotalItems(550);
    setItemsPerPage(10);
    setIsLoading(false);
  };

 
  const handleViewDetails = (appointment: TAppointment) => {
    setViewDetailsModalOpen(true);
    setAppointmentData(appointment);
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
        <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-8">
        <div className="grow">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Pending Appointment list
          </Divider>
        </div>
        <div className="w-[250px]">
          <Input
            type="primary"
            prefix={<IoSearchOutline />}
            placeholder="Search"
            className="focus:placeholder:!text-primary"
            onChange={(e) =>
              setParams([{ name: "searchTerm", value: e.target.value }])
            }
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1800 }}
        pagination={false}
       
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

export default PendingAppointmentsList;
