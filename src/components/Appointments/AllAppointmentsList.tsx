/* eslint-disable prefer-const */
import { useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  MenuProps,
  Popconfirm,
  Table,
  TableColumnsType,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { TAppointment } from "../../types/appointment.type";
import AppointmentDetails from "./AppointmentDetails";
import LabonePagination from "../../utils/Pagination/pagination";
import {
  useDeleteAppointmentMutation,
  useGetAllAppointmentQuery,
  useUpdateAppointmentMutation,
} from "../../redux/features/appointment/appointmentApi";
import { TQueryParam } from "../../types/global.type";
import { toast } from "sonner";

const AllAppointmentsList = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [deleteAppointment] = useDeleteAppointmentMutation();

  const { data, isLoading: isDataLoading } = useGetAllAppointmentQuery(params);
  const [updateAppointment] = useUpdateAppointmentMutation();

  const statusItems: MenuProps["items"] = [
    {
      label: (
        <div className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
          Approve
        </div>
      ),
      key: "approve",
    },
    {
      label: (
        <span className="capitalize text-sm font-medium text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          Cancel
        </span>
      ),
      key: "cancel",
    },
  ];

  const handleViewDetails = (data: TAppointment) => {
    setAppointmentData(data);
    setViewDetailsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteAppointment(id).unwrap();
    if (res?.success) {
      toast.success("Appointment Delete Successful");
    } else {
      toast.error("Something want wrong!");
    }
  };

  const columns: TableColumnsType<TAppointment> = [
    {
      title: "SL",
      width: 50,
      align: "center",
      render: (_: any, __: TAppointment, index: number) => <p>{index + 1}</p>,
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
      dataIndex: "mobileNumber",
    },
    {
      title: "Date",
      dataIndex: "appointmentDate",
    },
    {
      title: "Doctor",
      render: (data: TAppointment) => (
        <p>
          {data?.doctorID?.firstName} {data?.doctorID?.lastName}
        </p>
      ),
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
      width: 140,
      render: (record: TAppointment) => {
        return (
          <Dropdown
            menu={{
              items: statusItems,
              onClick: (data) => handleUpdateStatus(data.key, record?._id),
            }}
            trigger={["click"]}
            disabled={record?.status === "cancel"}
          >
            <span>
              <div
                className={`flex items-center justify-between py-1 px-2 capitalize text-sm font-medium text-accent border border-gray-200 rounded-lg ${
                  record?.status === "cancel" &&
                  "!border-secondary/20 !justify-center"
                }`}
              >
                <div>
                  <span
                    className={`w-2 h-2 rounded-full inline-block mr-2 ${
                      record?.status === "approve"
                        ? "bg-teal-600"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {record?.status}
                </div>
                {record?.status === "cancel" || <IoIosArrowDown />}
              </div>
            </span>
          </Dropdown>
        );
      },
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Approve",
          value: "approve",
        },
        {
          text: "Cancel",
          value: "cancel",
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
      width: 150,
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

  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState<TAppointment>(
    {} as TAppointment,
  );

  const handleUpdateStatus = async (data: string, id: string) => {
    console.log(data);
    console.log(id);

    const tostId = toast.loading("Status Updating...");
    try {
      const payload = {
        id,
        data,
      };

      const res = await updateAppointment(payload).unwrap();
      res && toast.success("Status Updated", { id: tostId, duration: 2000 });
    } catch (error) {
      console.log("error---=>", error);
      toast.error("something went wrong", { id: tostId, duration: 2000 });
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

  console.log(result);

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-7">
        <div className="grow">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Appointments list
          </Divider>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={result}
        scroll={{ x: 1800 }}
        pagination={false}
        loading={isDataLoading}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      <AppointmentDetails
        viewDetailsModalOpen={viewDetailsModalOpen}
        setViewDetailsModalOpen={setViewDetailsModalOpen}
        appointmentData={appointmentData}
      />
    </>
  );
};

export default AllAppointmentsList;
