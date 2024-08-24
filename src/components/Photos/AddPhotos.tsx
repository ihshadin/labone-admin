/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Row } from "antd";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { toast } from "sonner";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useState } from "react";
import { useAddPhotosMutation } from "../../redux/features/photos/photosApi";

const AddPhotos = ({ field }: { field: string }) => {
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
        field: field,
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
    <>
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
                <UploadImageWithPreview
                  setFile={setImageFile}
                  aspectRatio={4 / 3}
                  ratioName="fourThree"
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
                    Add the Photo
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddPhotos;
