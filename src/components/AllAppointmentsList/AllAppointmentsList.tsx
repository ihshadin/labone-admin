import { Dropdown, MenuProps, Table } from "antd";
import { Button, TableColumnsType, TableProps } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const AllAppointmentsList = () => {
    const handleUpdateStatus = async (data: any, id: string) => {
        
        console.log(data.key)
        console.log(id)
        
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
    const statusItems: MenuProps["items"] = [
        {
          label: (
            <div className="capitalize text-xs font-medium text-secondary">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-teal-600"
              ></span>
              APPROVED
            </div>
          ),
          key: "APPROVED",
        },
        {
          label: (
            <span className="capitalize text-xs font-medium text-secondary">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-red-500"
              ></span>
              PENDING
            </span>
          ),
          key: "PENDING",
        },
      ];
  const columns: TableColumnsType<any> = [
    {
      title: "SL",
      dataIndex: "sl",
      width: 50,
      align: "center",
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      width: 170,
      fixed: "left",
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
        render: (record: any) => {
          return (
            <Dropdown
              menu={{
                items: statusItems,
                onClick: (data) => handleUpdateStatus(data, record?.id),
              }}
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className="flex items-center justify-between border border-[#E1E4EA] rounded-md py-1 px-2 capitalize text-xs font-medium text-secondary">
                  <div>
                    <span
                      className={`w-2 h-2 rounded-full inline-block mr-2 ${
                        record?.status === "APPROVED"
                          ? "bg-teal-600"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {record?.status}
                  </div>
  
                  <IoIosArrowDown />
                </div>
              </a>
            </Dropdown>
          );
        },
        filters: [
            {
              text: 'Pending',
              value: 'pending',
            },
            {
              text: 'Approve',
              value: 'approve',
            },
            {
              text: 'Cancel',
              value: 'cancel',
            }
          ],
          onFilter: (value, record) => record.status.startsWith(value as string),
          filterSearch: true,
         
        },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <div className="flex gap-2">
          <Button>
            <FiEdit2 fontSize={15} />
          </Button>
          <Button>
            <AiFillDelete fontSize={15} />
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sl: "01",
      patientName: "Mukta Khatun",
      address: "Mozarmil Bus Stand, Kashimpur, Gazipur.",
      mobile: "01829566586",
      date: "02/05/2024",
      department: "Gynecology",
      doctor: "Dr. Arifa Akhter",
      message: "Your recent test results are available. Please visit the clinic for a detailed discussion.",
      status: "cancel",
    },
    {
      key: "2",
      sl: "02",
      patientName: "Rahim Uddin",
      address: "Dhanmondi, Dhaka.",
      mobile: "01711223344",
      date: "03/05/2024",
      department: "Cardiology",
      doctor: "Dr. Mahmudul Hasan",
      message: "Your recent test results are available. Please visit the clinic for a detailed discussion.",
      status: "pending",
    },
    {
      key: "3",
      sl: "03",
      patientName: "Ayesha Siddiqua",
      address: "Uttara, Dhaka.",
      mobile: "01999887766",
      date: "04/05/2024",
      department: "Pediatrics",
      doctor: "Dr. Jannatul Ferdous",
      message: "Your child's vaccination schedule is due next week. Please book an appointment.",
      status: "cancel",
    },
    {
      key: "4",
      sl: "04",
      patientName: "Karim Hossain",
      address: "Chittagong Road, Narayanganj.",
      mobile: "01612345678",
      date: "05/05/2024",
      department: "Orthopedics",
      doctor: "Dr. Anisur Rahman",
      message: "The X-ray reports are ready. Kindly collect them from the reception.",
      status: "approve",
    },
    {
      key: "5",
      sl: "05",
      patientName: "Sumaiya Begum",
      address: "Sylhet Sadar, Sylhet.",
      mobile: "01876543210",
      date: "06/05/2024",
      department: "Dermatology",
      doctor: "Dr. Fatema Tuz Zohra",
      message: "Your follow-up appointment is scheduled for next Monday. Please confirm your availability.",
      status: "pending",
    },
    {
      key: "6",
      sl: "06",
      patientName: "Hassan Ali",
      address: "Banani, Dhaka.",
      mobile: "01722334455",
      date: "07/05/2024",
      department: "Neurology",
      doctor: "Dr. Rafiqul Islam",
      message: "Please bring your previous medical records during your next visit.",
      status: "cancel",
    },
    {
      key: "7",
      sl: "07",
      patientName: "Fatema Khatun",
      address: "Mirpur, Dhaka.",
      mobile: "01633445566",
      date: "08/05/2024",
      department: "Ophthalmology",
      doctor: "Dr. Farzana Rahman",
      message: "Your eye examination results are ready. Please collect them from the clinic.",
      status: "approve",
    },
    {
      key: "8",
      sl: "08",
      patientName: "Rashid Khan",
      address: "Bashundhara, Dhaka.",
      mobile: "01944556677",
      date: "09/05/2024",
      department: "Dentistry",
      doctor: "Dr. Kamrul Hasan",
      message: "Your dental procedure has been scheduled for next Wednesday. Please confirm your attendance.",
      status: "pending",
    },
    {
      key: "9",
      sl: "09",
      patientName: "Shabana Akter",
      address: "Gulshan, Dhaka.",
      mobile: "01855667788",
      date: "10/05/2024",
      department: "ENT",
      doctor: "Dr. Nasima Sultana",
      message: "Please visit the clinic for a follow-up regarding your recent ENT examination.",
      status: "cancel",
    },
    {
      key: "10",
      sl: "10",
      patientName: "Nasir Uddin",
      address: "Farmgate, Dhaka.",
      mobile: "01766778899",
      date: "11/05/2024",
      department: "Psychiatry",
      doctor: "Dr. Sharmin Akhter",
      message: "Your counseling session is scheduled for next Friday. Please ensure to be on time.",
      status: "approve",
    },
  ];
  
  const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} virtual scroll={{ x: 1700 }} />
    </div>
  );
};

export default AllAppointmentsList;
