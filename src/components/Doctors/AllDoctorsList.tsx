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
import UpdateDoctor from "./UpdateDoctor";
import LabonePagination from "../../utils/Pagination/pagination";
import { IoSearchOutline } from "react-icons/io5";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "../../redux/features/doctor/doctorApi";
import { TQueryParam } from "../../types/global.type";
import { toast } from "sonner";

const AllDoctorsList = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 10 },
  ]);

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [doctorData, setDoctorData] = useState<TDoctor>({} as TDoctor);

  const { data, isLoading: isDataLoading } = useGetAllDoctorsQuery(params);
  const [deleteDoctor] = useDeleteDoctorMutation();

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
      width: 230,
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
      width: 270,
    },
    {
      title: "Department",
      key: "department",
      width: 250,
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
    await deleteDoctor(id);
    toast.success("Doctor Delete Successful");
  };

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => {
      const filteredParams = prevParams?.filter(
        (param) => param.name !== "page",
      );

      // Check if "limit" with value 10 exists
      const limitExists = prevParams.some(
        (param) => param.name === "limit" && param.value === 10,
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
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Doctors list
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

export default AllDoctorsList;
