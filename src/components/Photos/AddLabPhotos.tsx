/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Row } from "antd";
import { Link } from "react-router-dom";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { toast } from "sonner";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useState } from "react";
import LabPhotosList from "./LabPhotosList";
import { useAddPhotosMutation } from "../../redux/features/photos/photosApi";

const AddLabPhotos = () => {
  const [imageFile, setImageFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [addLabPhoto] = useAddPhotosMutation();
  const onSubmit = async () => {
    const toastId = toast.loading("Adding Lab photo...");

    if (imageFile?.length === 0) {
      return toast.error("Select Lab Photo", { id: toastId });
    } else {
      let imageLink;
      if (imageFile) {
        imageLink = await uploadImageInCloudinary(imageFile, toastId);
      }

      const labPhotoData = {
        field: "labPhotos",
        photo: imageLink,
      };

      try {
        const res = await addLabPhoto(labPhotoData).unwrap();
        if (res?.success) {
          toast.success("Successfully added the lab photo", { id: toastId });
          form.resetFields();
        } else {
          toast.error("Something want wrong!", { id: toastId });
        }
      } catch (error: any) {
        toast.error("Something want wrong!", { id: toastId });
      }
    }
  };

  return (
    <div>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Add Lab Photo</span>
        </div>
      </section>
      <LabPhotosList />
      <div className="border rounded-xl mt-5 px-5 py-7">
        <Row>
          <Col span={24}>
            <Form
              form={form}
              onFinish={onSubmit}
              requiredMark={false}
              layout="vertical"
            >
              <Row gutter={16}>
                <Col span={7}>
                  <p className="font-medium mb-1.5">Add Lab Photo</p>
                  <UploadImageWithPreview
                    setFile={setImageFile}
                    aspectRatio={16 / 9}
                    ratioName="sixteenNine"
                  />
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <div className="flex items-center justify-end w-full gap-2">
                    <button
                      className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                      type="submit"
                    >
                      Add Lab Photo
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddLabPhotos;
