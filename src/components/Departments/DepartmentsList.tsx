import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Image,
  Input,
  Popconfirm,
  Table,
  TableColumnsType,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TDepartment } from "../../types/department.type";
import LabonePagination from "../../utils/Pagination/pagination";
import UpdateDepartment from "./UpdateDepartment";

const data = [
  {
    key: "1",
    _id: "1",
    icon: "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
    name: "Cardiology",
    details: "Department specializing in heart and blood vessel conditions.",
  },
  {
    key: "2",
    _id: "2",
    icon: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
    name: "Neurology",
    details: "Department focusing on disorders of the nervous system.",
  },
  {
    key: "3",
    _id: "3",
    icon: "https://c8.alamy.com/comp/2E3M2K4/sales-department-rgb-color-icon-2E3M2K4.jpg",
    name: "Pediatrics",
    details:
      "Department dedicated to the medical care of infants, children, and adolescents.",
  },
  {
    key: "4",
    _id: "4",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxarEtX8Z4Bg08wiQuhXQQDfbT2N6l5qP-NQ&s",
    name: "Orthopedics",
    details: "Department dealing with the musculoskeletal system.",
  },
  {
    key: "5",
    _id: "5",
    icon: "https://png.pngtree.com/png-clipart/20230811/original/pngtree-home-rgb-color-icon-neighborhood-department-home-improvement-vector-picture-image_10328612.png",
    name: "Dermatology",
    details: "Department specializing in skin, hair, and nail conditions.",
  },
];

const DepartmentsList = () => {
  const departmentColumns: TableColumnsType<TDepartment> = [
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      align: "center",
      width: 85,
      render: (photoUrl) => (
        <Image className="!w-12 !h-12 object-cover" src={photoUrl} />
      ),
    },
    {
      title: "Department Name",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "Department Details",
      dataIndex: "details",
      key: "details",
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
  const [departmentData, setDepartmentData] = useState<TDepartment>(
    {} as TDepartment
  );

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
  }, [searchText, currentPage, departmentData]);

  const handleUpdateData = (department: TDepartment) => {
    setUpdateModalOpen(true);
    setDepartmentData(department);
    // console.log("Edit", machine);
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
            All Departments List
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
      <UpdateDepartment
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        departmentData={departmentData}
      />
    </>
  );
};

export default DepartmentsList;
