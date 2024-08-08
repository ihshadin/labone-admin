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
import { TQueryParam } from "../../types/global.type";
import {
  useDeleteDiagnosticMachineMutation,
  useGetAllDiagnosticMachineQuery,
} from "../../redux/features/diagonisticMachine/diagonisticMachineApi";
import { toast } from "sonner";
import UpdateDiagnosticMachine from "./UpdateDiagnosticMachine";

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

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [machineData, setMachineData] = useState<TMachine>({} as TMachine);

  const [params, setParams] = useState<TQueryParam[]>([]);

  const { data, isLoading: isDataLoading } =
    useGetAllDiagnosticMachineQuery(params);
  const [deleteDiagnosticMachine] = useDeleteDiagnosticMachineMutation();

  const handleUpdateData = (machine: TMachine) => {
    setUpdateModalOpen(true);
    setMachineData(machine);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteDiagnosticMachine(id).unwrap();
    if (res?.success) {
      toast.success("Diagnostic Machine Delete Successful");
    } else {
      toast.error("Something want wrong!");
    }
  };

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
            onChange={(e) =>
              setParams([{ name: "searchTerm", value: e.target.value }])
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
      <UpdateDiagnosticMachine
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        machineData={machineData}
      />
    </>
  );
};

export default DiagnosticsAllMachinesList;
