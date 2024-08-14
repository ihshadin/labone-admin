/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { TBanner } from "../../types/banner.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import BannerList from "./BannerList";

const BannerSection = () => {
  const [bgImageFile, setBgImageFile] = useState<any>([]);
  const [rightImageFile, setRightImageFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TBanner) => {
    const toastId = toast.loading("Adding New Banner info...");

    let bgImage;
    if (bgImageFile) {
      bgImage = await uploadImageInCloudinary(bgImageFile, toastId);
    }

    let rightImage;
    if (rightImageFile) {
      rightImage = await uploadImageInCloudinary(rightImageFile, toastId);
    }

    const bannerData = {
      title: data.title,
      shortDesc: data.shortDesc,
      bgImage: bgImage,
      rightImage: rightImage,
    };
    console.log(bannerData);
    //   try {
    //     const res = await addDepartment(departmentData).unwrap();
    //     if (res?.success) {
    //       toast.success("Successfully added the Department", { id: toastId });
    //       form.resetFields();
    //       setFile([]);
    //     } else {
    //       toast.error("Something want wrong!", { id: toastId });
    //     }
    //   } catch (error: any) {
    //     toast.error(error.message, { id: toastId });
    //   }
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
              <Col span={10}>
                <Form.Item
                  label="Banner Title"
                  name="name"
                  tooltip="Here you have to input Banner Title"
                  rules={[
                    { required: true, message: "Banner Title is required" },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item
                  label="Short Description"
                  name="name"
                  tooltip="Here you have to input Short Description"
                  rules={[
                    { required: true, message: "Description is required" },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Department Details"
                  name="details"
                  tooltip="Describe about the Department."
                  rules={[{ required: true, message: "Details is required" }]}
                >
                  <Input.TextArea
                    placeholder="Write here..."
                    className="border border-[#C4CAD4] !rounded-lg"
                    rows={4}
                  />
                </Form.Item>
              </Col>
            </Row> */}

            <Row gutter={16}>
              <Col span={7}>
                <p className="font-medium mb-1.5">Right Side Image</p>
                <UploadImageWithPreview
                  setFile={setBgImageFile}
                  aspectRatio={10 / 8}
                  ratioName="rightSide"
                />
              </Col>
              <Col span={17}>
                <p className="font-medium mb-1.5">Background Image</p>
                <UploadImageWithPreview
                  setFile={setRightImageFile}
                  aspectRatio={18 / 8}
                  ratioName="bannerBg"
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
                    Add New Banner
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <BannerList />
    </>
  );
};

export default BannerSection;
