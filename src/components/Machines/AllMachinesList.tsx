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
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { TMachine } from "../../types/machine.type";
import LabonePagination from "../../utils/Pagination/pagination";
import UpdateMachine from "./UpdateMachine";
import { TQueryParam } from "../../types/global.type";
import {
  useDeleteMachineMutation,
  useGetAllMachineQuery,
} from "../../redux/features/machine/machineApi";
import { toast } from "sonner";

// const data = [
//   {
//     key: "1",
//     _id: "1",
//     photo:
//       "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
//     name: "CT SCAN Machine",
//     country: "Hitachi-Japan",
//     details: "Advanced imaging technology for detailed internal scans.",
//   },
//   {
//     key: "2",
//     _id: "2",
//     photo: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
//     name: "MRI Machine",
//     country: "Siemens-Germany",
//     details:
//       "Uses magnetic fields and radio waves to create detailed images of organs",
//   },
//   {
//     key: "3",
//     _id: "3",
//     photo:
//       "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
//     name: "Ultrasound Machine",
//     country: "GE Healthcare-USA",
//     details:
//       "Utilizes high-frequency sound waves to capture live images from the inside of the body.",
//   },
//   {
//     key: "4",
//     _id: "4",
//     photo: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
//     name: "X-Ray Machine",
//     country: "Philips-Netherlands",
//     details: "Employs X-rays to view the inside of the body, especially bones.",
//   },
//   {
//     key: "5",
//     _id: "5",
//     photo:
//       "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
//     name: "PET Scan Machine",
//     country: "Toshiba-Japan",
//     details:
//       "Combines nuclear medicine and biochemical analysis to produce images of the body's function.",
//   },
// ];

const AllMachinesList = () => {
  const machinesColumns: TableColumnsType<TMachine> = [
    {
      title: "Machine Image",
      dataIndex: "photo",
      key: "photo",
      align: "center",
      width: 130,
      render: (photoUrl) => (
        <Image className="!w-16 !h-12 object-cover" src={photoUrl} />
      ),
    },
    {
      title: "Machine Name",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "Machine Origin",
      dataIndex: "country",
      key: "country",
      width: 200,
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
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
          <Popconfirm
            title="Delete the Machine"
            description="Are you sure to delete this Machine?"
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

  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 10 },
  ]);

  const { data, isLoading: isDataLoading } = useGetAllMachineQuery(params);
  const [deleteMachine] = useDeleteMachineMutation();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [machineData, setMachineData] = useState<TMachine>({} as TMachine);

  const handleUpdateData = (machine: TMachine) => {
    setUpdateModalOpen(true);
    setMachineData(machine);
    // console.log("Edit", machine);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteMachine(id).unwrap();
    if (res?.success) {
      toast.success("Machine Delete Successful");
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
            All Machine List
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
        columns={machinesColumns}
        dataSource={result}
        scroll={{ x: 900 }}
        loading={isDataLoading}
        pagination={false}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      <UpdateMachine
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        machineData={machineData}
      />
    </>
  );
};

export default AllMachinesList;
