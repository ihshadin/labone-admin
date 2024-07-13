/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Col, Divider, Form, Input, Modal, Row } from "antd";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { TDepartment, TUpdateDepartment } from "../../types/department.type";

const UpdateSchedule = ({
  updateModalOpen,
  setUpdateModalOpen,
  departmentData,
}: TUpdateDepartment) => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TDepartment) => {
    const formData = new FormData();
    const toastId = toast.loading("Updating Department info...");

    const updatedData = {
      name: data.name,
      details: data.details,
    };
    console.log({ updatedData });

    formData.append("file", file[0]?.originFileObj);
    formData.append("data", JSON.stringify(updatedData));

    try {
      setIsLoading(true);
      setUpdateModalOpen(false);
      toast.success("Successfully updated the Department", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(departmentData);

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(departmentData);
  }, [departmentData]);

  return (
    <Modal
      title={null}
      centered
      open={updateModalOpen}
      onOk={() => setUpdateModalOpen(false)}
      onCancel={() => setUpdateModalOpen(false)}
      width={1000}
      footer={null}
    >
      <div className="text-center mb-10">
        <h2 className="text-primary text-xl font-semibold">
          Details of the Department
        </h2>
        <Divider plain className="!my-1">
          Edit department's infos
        </Divider>
      </div>
      <Form
        form={form}
        initialValues={departmentData}
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
              rules={[
                { required: true, message: "Department Name is required" },
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
            <p className="font-medium mb-1.5">Department Icon</p>
            <UploadImageWithPreview
              setFile={setFile}
              defaultImage={departmentData?.icon}
              aspectRatio={1 / 1}
              ratioName="oneOne"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
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
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Loading..." : "Update Department"}
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateSchedule;
