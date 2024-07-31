
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
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { TMachine } from "../../types/machine.type";
import LabonePagination from "../../utils/Pagination/pagination";
import UpdateMachine from "../Machines/UpdateMachine";

const data = [
  {
    key: "1",
    _id: "1",
    photo:
      "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
    name: "CT SCAN Machine",
    country: "Hitachi-Japan",
    details: "Advanced imaging technology for detailed internal scans.",
  },
  {
    key: "2",
    _id: "2",
    photo: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
    name: "MRI Machine",
    country: "Siemens-Germany",
    details:
      "Uses magnetic fields and radio waves to create detailed images of organs",
  },
  {
    key: "3",
    _id: "3",
    photo:
      "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
    name: "Ultrasound Machine",
    country: "GE Healthcare-USA",
    details:
      "Utilizes high-frequency sound waves to capture live images from the inside of the body.",
  },
  {
    key: "4",
    _id: "4",
    photo: "https://i.ytimg.com/vi/l6nysqD9ibc/maxresdefault.jpg",
    name: "X-Ray Machine",
    country: "Philips-Netherlands",
    details: "Employs X-rays to view the inside of the body, especially bones.",
  },
  {
    key: "5",
    _id: "5",
    photo:
      "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
    name: "PET Scan Machine",
    country: "Toshiba-Japan",
    details:
      "Combines nuclear medicine and biochemical analysis to produce images of the body's function.",
  },
];

const DiagnosticsAllMachinesList = () => {
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

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [totalItems, setTotalItems] = useState<number>(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [machineData, setMachineData] = useState<TMachine>({} as TMachine);

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
  }, [searchText, currentPage, machineData]);

  const handleUpdateData = (machine: TMachine) => {
    setUpdateModalOpen(true);
    setMachineData(machine);
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
            All Diagnostic Machine List
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
        columns={machinesColumns}
        dataSource={data}
        scroll={{ x: 900 }}
        pagination={false}
      />
      <LabonePagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <UpdateMachine
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        machineData={machineData}
      />
    </>
  );
};

export default DiagnosticsAllMachinesList;
