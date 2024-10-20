/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import TextArea from "antd/es/input/TextArea";

import { toast } from "sonner";
import {
  useAddServiceMutation,
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "../../redux/features/service/serviceApi";
import { TService } from "../../types/service.type";
import { Popconfirm } from "antd";

const Services = () => {
  const [newService, setNewService] = useState("");

  const { data } = useGetAllServiceQuery(undefined);
  const [removeService] = useDeleteServiceMutation();
  const [addService] = useAddServiceMutation();

  // Handling adding a new Service
  const handleAddService = async () => {
    const toastId = toast.loading("Adding Service...");
    try {
      const res = await addService({ name: newService }).unwrap();
      if (res?.success) {
        toast.success("Successfully added the Service", { id: toastId });
        setNewService("");
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex gap-16 border rounded-xl mt-2.5 px-5 py-7">
        <div className="w-[60%]">
          <ul className="list-inside list-decimal flex flex-col gap-3">
            {data?.data?.result?.map((service: TService) => (
              <li key={service?._id} className="text-base font-medium">
                {service?.name}
                <Popconfirm
                  title="Delete the Service"
                  description="Are you sure to delete this Service?"
                  placement="topLeft"
                  onConfirm={() => removeService(service?._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <FaXmark className="text-base text-secondary cursor-pointer inline-block ml-2 border border-secondary/40 rounded-lg p-0.5 w-auto h-auto" />
                </Popconfirm>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[40%] flex flex-col gap-2 items-end">
          <TextArea
            rows={4}
            className="border border-[#C4CAD4] !rounded-lg"
            placeholder="Write here..."
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
          />
          <button
            onClick={handleAddService}
            className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
            type="submit"
          >
            Add Service
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
