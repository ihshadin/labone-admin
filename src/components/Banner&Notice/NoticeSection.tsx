/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import TextArea from "antd/es/input/TextArea";
import {
  useAddNoticeMutation,
  useDeleteNoticeMutation,
  useGetAllNoticesQuery,
} from "../../redux/features/notice/noticeApi";
import { TNotice } from "../../types/notice.type";
import { toast } from "sonner";

const NoticeSection = () => {
  const [newNotice, setNewNotice] = useState("");

  const { data } = useGetAllNoticesQuery(undefined);
  const [removeNotice] = useDeleteNoticeMutation();
  const [addNotice] = useAddNoticeMutation();

  // Handling adding a new notice
  const handleAddNotice = async () => {
    const toastId = toast.loading("Adding notice...");
    try {
      const res = await addNotice({ noticeText: newNotice }).unwrap();
      if (res?.success) {
        toast.success("Successfully added the Notice", { id: toastId });
        setNewNotice("");
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
            {data?.data?.result?.map((notice: TNotice) => (
              <li key={notice?._id} className="text-base font-medium">
                {notice?.noticeText}
                <FaXmark
                  onClick={() => removeNotice(notice?._id)}
                  className="text-base text-secondary cursor-pointer inline-block ml-2 border border-secondary/40 rounded-lg p-0.5 w-auto h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[40%] flex flex-col gap-2 items-end">
          <TextArea
            rows={4}
            className="border border-[#C4CAD4] !rounded-lg"
            placeholder="Write here..."
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
          />
          <button
            onClick={handleAddNotice}
            className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
            type="submit"
          >
            Add Notice
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticeSection;
