/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const api_key = import.meta.env.VITE_CLOUDINARY_API_KEY;
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const uploadImageInCloudinary = async (
  file: any,
  toastId?: string | number
) => {
  const imageFile = file[0]?.originFileObj;
  const imageData = new FormData();
  imageData.append("file", imageFile);
  imageData.append("upload_preset", upload_preset);
  imageData.append("api_key", api_key);
  imageData.append("timestamp", String(Date.now() / 1000));

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: imageData,
      }
    );
    const result = await response.json();
    // console.log("result---=>", result);

    return result?.url;
  } catch (error: any) {
    console.log("error from image upload---=>", error);
    toastId && toast.error("Failed to upload image", { id: toastId });
    return;
  }
};
