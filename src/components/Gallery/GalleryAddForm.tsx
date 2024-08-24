/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useAddGalleryMutation } from "../../redux/features/gallery/galleryApi";
import { TGallery } from "../../types/gallery.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";

export type TDepartment = {
  _id: string;
  name: string;
};

const GalleryAddForm = () => {
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [addGallery] = useAddGalleryMutation();

  const onSubmit = async (data: TGallery) => {
    const toastId = toast.loading("Adding new Gallery...");

    let imageLink;
    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const galleryNewData = {
      title: data?.title,
      category: data?.category,
      photo: imageLink,
    };

    try {
      const res = await addGallery(galleryNewData).unwrap();
      if (res?.success) {
        toast.success("Successfully added the gallery", { id: toastId });
        form.resetFields();
        setFile([]);
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
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
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Title"
                  name="title"
                  tooltip="Here you have to input the Gallery Title."
                >
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Category"
                  name="category"
                  tooltip="Here you have to input the Gallery Category."
                  rules={[{ required: true, message: "Category is required" }]}
                >
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <p className="font-medium mb-1.5">Gallery Image</p>
                <UploadImageWithPreview
                  aspectRatio={1 / 1}
                  ratioName="oneOne"
                  setFile={setFile}
                />
              </Col>
            </Row>

            <Row>
              <div className="flex items-center justify-end w-full">
                <button
                  className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                  type="submit"
                >
                  Add Gallery
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default GalleryAddForm;
