import { Image } from "antd";
import { FaTrashAlt } from "react-icons/fa";
import {
  useGetAllPhotosQuery,
  useRemovePhotosMutation,
} from "../../redux/features/photos/photosApi";
import { toast } from "sonner";

const LabPhotosList = () => {
  const { data } = useGetAllPhotosQuery(undefined);
  const [deletePhoto] = useRemovePhotosMutation();

  const handleDeleteImage = async (id: string) => {
    const labPhotoData = {
      field: "labPhotos",
      photo: id,
    };

    try {
      const res = await deletePhoto(labPhotoData).unwrap();
      if (res?.success) {
        toast.success("Successfully added the lab photo");
      } else {
        toast.error("Something want wrong!");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something want wrong!");
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5 my-10">
      {data?.data[0]?.labPhotos?.map((img: string) => (
        <div key={img} className="relative group">
          <div className="overflow-hidden mx-auto">
            <Image
              className="w-full h-full object-cover"
              alt="images"
              src={img}
            />
          </div>
          <button
            onClick={() => handleDeleteImage(img)}
            className="hidden group-hover:inline-block absolute top-[42%] right-3"
          >
            <FaTrashAlt size={20} className="text-[#e74b4b]" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default LabPhotosList;
