import { Image } from "antd";
import { useRemovePhotosMutation } from "../../redux/features/photos/photosApi";
import { toast } from "sonner";
import { PiTrashLight } from "react-icons/pi";

const PhotoItem = ({ img, field }: { img: string; field: string }) => {
  const [deletePhoto] = useRemovePhotosMutation();

  const handleDeleteImage = async (id: string) => {
    const labPhotoData = {
      field: field,
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
    <div
      key={img}
      className="relative transition-all group rounded-xl overflow-hidden"
    >
      <Image
        className="w-full h-full object-cover"
        alt="images"
        src={img}
        preview={false}
      />
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 w-full h-full bg-black/40 backdrop-blur-sm absolute top-0 left-0"></span>
      <button
        onClick={() => handleDeleteImage(img)}
        className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-2 left-2 px-1 py-1.5 rounded-md bg-white text-secondary"
      >
        <PiTrashLight size={20} />
      </button>
    </div>
  );
};

export default PhotoItem;
