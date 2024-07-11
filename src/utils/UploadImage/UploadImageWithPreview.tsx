import { useState } from "react";
import {
  Button,
  GetProp,
  Image,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
import defaultAvatar from "../../assets/image/preview.jpg";
import "../../styles/uploadImage.css";
import ImgCrop from "antd-img-crop";

const props: UploadProps = {
  name: "file",
  onChange(info) {
    if (info.file.status !== "uploading") {
      //   console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  defaultFileList: [
    {
      uid: "2",
      name: "Store-Image.png",
      status: "done",
      url: defaultAvatar,
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UploadImageWithPreview = ({ setFile }: any) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFile(newFileList);
  };

  return (
    <>
      <div className="flex items-center gap-5 upload-image-circle">
        <ImgCrop rotationSlider aspect={25 / 32}>
          <Upload
            {...props}
            listType="picture-card"
            onPreview={handlePreview}
            onChange={handleChange}
            maxCount={1}
          >
            <Button>Upload a photo</Button>
          </Upload>
        </ImgCrop>
        <>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
              alt="Image Preview"
            />
          )}
        </>
      </div>
    </>
  );
};

export default UploadImageWithPreview;
