

/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { TDoctor } from "../../types/doctor.type";
import LabonePagination from "../../utils/Pagination/pagination";
import { IoSearchOutline } from "react-icons/io5";
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from "../../redux/features/doctor/doctorApi";
import { TQueryParam } from "../../types/global.type";
import UpdateDoctor from "../Doctors/UpdateDoctor";

const DiagnosticsAllDoctorList = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [doctorData, setDoctorData] = useState<TDoctor>({} as TDoctor);

  const { data, isLoading: isDataLoading } = useGetAllDoctorsQuery(params);
  const [deleteDoctor, {data: deletedData}] = useDeleteDoctorMutation()
  console.log("deleted data",deletedData)
  // const { data, isLoading: isDataLoading } = useGetAllDoctorsQuery(undefined);

  const doctorsColumns: TableColumnsType<TDoctor> = [
    {
      title: "Sort No",
      dataIndex: "serialNumber",
      key: "serialNumber",
      align: "center",
      width: 90,
    },
    {
      title: "Full Name",
      render: (data: TDoctor) => (
        <p>
          {data?.firstName} {data?.lastName}
        </p>
      ),
      width: 170,
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
      width: 150,
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: "Department",
      key: "department",
      render: (record: TDoctor) => <p>{record?.departmentID?.name}</p>,
    },
    {
      title: "Specialty",
      dataIndex: "specialization",
      key: "specialization",
      width: 250,
    },
    {
      title: "Degree",
      dataIndex: "degree",
      key: "degree",
      width: 480,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 140,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button onClick={() => handleUpdateData(record)}>
            <FiEdit2 fontSize={16} />
          </Button>
          {/* <Button onClick={() => handleDelete(record._id)}>
            <AiFillDelete fontSize={16} />
          </Button> */}
          <Popconfirm
            title="Delete the doctor"
            description="Are you sure to delete this Doctor?"
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


  const handleUpdateData = (doctor: TDoctor) => {
    setUpdateModalOpen(true);
    setDoctorData(doctor);
  };

  const handleDelete = async (id: string) => {
    // Handle delete action
     await  deleteDoctor(id)
    console.log("Delete", id);
  };


  // const datas = [
  //   {
  //     key: "1",
  //     _id: "1",
  //     fullName: "ডাঃ আরিফা আখতার",
  //     serialNumber: 1,
  //     contactNumber: 123456789,
  //     email: "john@example.com",
  //     department: "Gynaecology",
  //     specialty: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন।",
  //     degree:
  //       "এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য), এমসিপিএস, এফসিপিএস (গাইনি এন্ড অবস), এমআরসিওজি (লন্ডন,ইউকে), রিপ্রোডাক্টিভ এন্ডোক্রাইনোলজি এন্ড ইনফার্টিলিটি কোর্স (বিএসএমএমইউ) কনসালটেন্ট (গাইনি এন্ড অবস), ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা।",
  //     address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
  //     doctorImage: imageTest,
  //   },
  //   {
  //     key: "2",
  //     _id: "2",
  //     fullName: "ডাঃ রুখসানা পারভীন",
  //     serialNumber: 2,
  //     contactNumber: 123456789,
  //     email: "john@example.com",
  //     department: "Gynaecology",
  //     specialty: "স্ত্রী রোগ ও প্রসূতি বিদ্যা বিশেষজ্ঞ ও সার্জন।",
  //     degree:
  //       "এমবিবিএস, বিসিএস (স্বাস্থ্য), স্পেশাল ট্রেনিং ইন গাইনি অনকলোজী এমসিপিএস (গাইনি এন্ড অবস্), এফসিপিএস (গাইনি এন্ড অবস্)। আর এস, জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল, মহাখালী, ঢাকা ।",
  //     address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
  //     doctorImage: imageTest,
  //   },
  //   {
  //     key: "3",
  //     _id: "3",
  //     fullName: "John Brown",
  //     serialNumber: 3,
  //     contactNumber: 123456789,
  //     email: "john@example.com",
  //     department: "Cardiology",
  //     specialty: "Cardiologist",
  //     degree: "MD",
  //     address: "123 Street, City",
  //     doctorImage: imageTest,
  //   },
  // ];

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const meta = data?.data?.meta;
  const result = data?.data?.result;

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-8">
        <div className="grow">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            Diagnostic All Doctors list
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
        columns={doctorsColumns}
        dataSource={result}
        scroll={{ x: 1900 }}
        loading={isDataLoading}
        pagination={false}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      <UpdateDoctor
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        doctorData={doctorData}
      />
    </>
  );
};

export default DiagnosticsAllDoctorList;
