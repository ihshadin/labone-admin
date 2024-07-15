import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  Image,
  MenuProps,
  Popconfirm,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import LabonePagination from "../../utils/Pagination/pagination";
import { TUsers } from "../../types/user.type";

const AllUsers = () => {
  const statusItems: MenuProps["items"] = [
    {
      label: (
        <div className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
          Admin
        </div>
      ),
      key: "admin",
    },
    {
      label: (
        <span className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          Patient
        </span>
      ),
      key: "patient",
    },
  ];
  const columns: TableColumnsType<TUsers> = [
    {
      title: "SL",
      dataIndex: "key",
      width: 50,
      align: "center",
    },
    {
      title: "User Photo",
      dataIndex: "userImage",
      key: "userImage",
      align: "center",
      width: 120,
      render: (userImage) => (
        <Image className="!w-12 !h-12 object-cover rounded-full" src={userImage} />
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      width: 170,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      width: 170,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      key: "status",
      fixed: "right",
      width: 140,
      render: (record: TUsers) => {
        return (
          <Dropdown
            menu={{
              items: statusItems,
              onClick: (data) => handleUpdateStatus(data.key, record?._id),
            }}
            trigger={["click"]}
            disabled={record?.status === "owner"}
          >
            <span>
              <div
                className={`flex items-center justify-between py-1 px-2 capitalize text-sm font-medium text-accent border border-gray-200 rounded-lg ${
                  record?.status === "owner" &&
                  "!border-secondary/20 !justify-center"
                }`}
              >
                <div>
                  <span
                    className={`w-2 h-2 rounded-full inline-block mr-2 ${
                      record?.status === "patient"
                        ? "bg-teal-600"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {record?.status}
                </div>
                {record?.status === "owner" || <IoIosArrowDown />}
              </div>
            </span>
          </Dropdown>
        );
      },
      filters: [
        {
          text: "Owner",
          value: "Owner",
        },
        {
          text: "Admin",
          value: "Admin",
        },
        {
          text: "Patient",
          value: "Patient",
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
      width: 100,
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
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
      userImage: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      status: "Owner",
    },
    {
      key: "2",
      _id: "02",
      userImage: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "Admin",
    },
    {
      key: "3",
      _id: "03",
      userImage: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@example.com",
      status: "Patient",
    },
    {
      key: "4",
      _id: "04",
      userImage: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      status: "Patient",
    },
    {
      key: "5",
      _id: "05",
      userImage: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
      firstName: "William",
      lastName: "Brown",
      email: "william.brown@example.com",
      status: "Patient",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


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
          All User List
          </Divider>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1000 }}
        pagination={false}
        onChange={onChange}
      />
      <LabonePagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AllUsers;
