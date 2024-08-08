import { useState } from "react";
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

import LabonePagination from "../../utils/Pagination/pagination";
import { TUsers } from "../../types/user.type";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../redux/features/user/userApi";
import { IoSearchOutline } from "react-icons/io5";
import { TQueryParam } from "../../types/global.type";
import { toast } from "sonner";

const AllUsers = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 10 },
  ]);
  const { data } = useGetAllUserQuery(params);
  const [deleteUser] = useDeleteUserMutation();

  const columns: TableColumnsType<TUsers> = [
    {
      title: "SL",
      width: 50,
      align: "center",
      render: (_: any, __: TUsers, index: number) => <p>{index + 1}</p>,
    },
    {
      title: "User Photo",
      key: "userImage",
      align: "center",
      width: 120,
      render: (data: TUsers) => (
        <Image
          className="!w-12 !h-12 object-cover rounded-full"
          src={data?.photo}
          alt="image"
        />
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "User Role",
      dataIndex: "role",
    },

    {
      title: "Action",
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

  const handleDelete = async (id: string) => {
    const res = await deleteUser(id).unwrap();
    if (res?.success) {
      toast.success("User Delete Successful");
    } else {
      toast.error("Something want wrong!");
    }
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
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All User
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
        columns={columns}
        dataSource={result}
        scroll={{ x: 1000 }}
        pagination={false}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
};

export default AllUsers;
