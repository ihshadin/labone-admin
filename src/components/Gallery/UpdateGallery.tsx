/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Col, Form, Input, Row, Modal, Divider } from "antd";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";

import { TGallery, TUpdateGallery } from "../../types/gallery.type";
import { useUpdateGalleryMutation } from "../../redux/features/gallery/galleryApi";

const UpdateGallery = ({
  updateModalOpen,
  setUpdateModalOpen,
  galleryData,
}: TUpdateGallery) => {
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [updateGallery] = useUpdateGalleryMutation();

  const onSubmit = async (data: TGallery) => {
    const toastId = toast.loading("Updating Gallery info...");

    let imageLink;

    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const galleryNewData = {
      title: data?.title,
      category: data?.category,
      photo: imageLink ? imageLink : galleryData?.photo,
    };

    // console.log({ GalleryNewData });

    const updateInfo = {
      id: galleryData?._id,
      data: galleryNewData,
    };

    try {
      const res = await updateGallery(updateInfo).unwrap();

      if (res?.success) {
        setUpdateModalOpen(false);
        toast.success("Successfully updated the Gallery", { id: toastId });
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
    }
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(galleryData);
  }, [galleryData]);

  return (
    <>
      <Modal
        title={null}
        centered
        open={updateModalOpen}
        onOk={() => setUpdateModalOpen(false)}
        onCancel={() => setUpdateModalOpen(false)}
        width={700}
        footer={null}
      >
        <div className="text-center mb-10">
          <h2 className="text-primary text-xl font-semibold">
            Details of the Gallery
          </h2>
          <Divider plain className="!my-1">
            Edit Gallery's info
          </Divider>
        </div>
        <Form
          form={form}
          initialValues={galleryData}
          onFinish={onSubmit}
          requiredMark={false}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label="Title"
                name="title"
                tooltip="Here you have to input the Gallery's first name."
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
                tooltip="Here you have to input the Gallery's Category."
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
                defaultImage={galleryData?.photo}
                setFile={setFile}
              />
            </Col>
          </Row>

          <Row>
            <div className="flex items-center justify-end w-full gap-2">
              <span
                className="cursor-pointer border px-4 py-1.5  font-medium rounded-lg "
                onClick={() => setUpdateModalOpen(false)}
              >
                Close
              </span>
              <button
                className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                type="submit"
              >
                Update Gallery
              </button>
            </div>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateGallery;
