/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { TDepartment } from "../../types/department.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useAddDepartmentMutation } from "../../redux/features/department/departmentApi";

const DepartmentEntryForm = () => {
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: TDepartment) => {
    const toastId = toast.loading("Add New Department info...");

    let imageLink;
    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const departmentData = {
      name: data.name,
      details: data.details,
      icon: imageLink,
    };

    try {
      const res = await addDepartment(departmentData).unwrap();
      if (res?.success) {
        toast.success("Successfully added the Department", { id: toastId });
        form.resetFields();
        setFile([]);
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
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
              <Col span={24}>
                <Form.Item
                  label="Department Name"
                  name="name"
                  tooltip="Here you have to input the Department name."
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    type="text"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
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
            </Row>

            <Row>
              <Col span={24}>
                <p className="font-medium mb-1.5">Department Image</p>
                <UploadImageWithPreview
                  setFile={setFile}
                  aspectRatio={1 / 1}
                  ratioName="oneOne"
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
                    Add New Department
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

export default DepartmentEntryForm;
