/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Col, Form, Input, Row, Select, Modal } from "antd";
import { toast } from "sonner";
import { TDoctor, TUpdateDoctor } from "../../types/doctor.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";

const UpdateDoctor = ({
  updateModalOpen,
  setUpdateModalOpen,
  doctorData,
}: TUpdateDoctor) => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TDoctor) => {
    const formData = new FormData();
    const toastId = toast.loading("updating new doctor...");

    const updatedData = {
      fullName: data.fullName,
      contactNumber: data.contactNumber,
      email: data.email,
      department: data.department,
      specialty: data.specialty,
      degree: data.degree,
      address: data.address,
    };
    console.log({ updatedData });

    formData.append("file", file[0]?.originFileObj);
    formData.append("data", JSON.stringify(updatedData));

    try {
      setIsLoading(true);
      toast.success("Successfully updated the doctor", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(doctorData);

  const interestOptions = [
    { value: "Travel", label: "Travel" },
    { value: "Food and Cooking", label: "Food and Cooking" },
    { value: "Fitness and Health", label: "Fitness and Health" },
    { value: "Music", label: "Music" },
    { value: "Art and Design", label: "Art and Design" },
    { value: "Reading", label: "Reading" },
    { value: "Technology", label: "Technology" },
    { value: "Sports", label: "Sports" },
    { value: "Gardening", label: "Gardening" },
    { value: "Movies and TV Shows", label: "Movies and TV Shows" },
    { value: "Photography", label: "Photography" },
    { value: "Writing", label: "Writing" },
    { value: "Gaming", label: "Gaming" },
    { value: "Fashion", label: "Fashion" },
    { value: "DIY Projects", label: "DIY Projects" },
    { value: "Learning Languages", label: "Learning Languages" },
    { value: "Social Media", label: "Social Media" },
    { value: "Volunteering", label: "Volunteering" },
    { value: "Pets", label: "Pets" },
    { value: "Outdoors", label: "Outdoors" },
  ];

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(doctorData);
  }, [doctorData]);

  return (
    <>
      <Modal
        title="Update the doctor's info"
        centered
        open={updateModalOpen}
        onOk={() => setUpdateModalOpen(false)}
        onCancel={() => setUpdateModalOpen(false)}
        width={1000}
        footer={null}
      >
        <Form
          form={form}
          initialValues={doctorData}
          onFinish={onSubmit}
          requiredMark={false}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={24} md={{ span: 18 }}>
              <Form.Item
                label="Full Name"
                name="fullName"
                tooltip="Here you have to input the doctor's full name."
                rules={[{ required: true, message: "Full Name is required" }]}
              >
                <Input
                  type="text"
                  placeholder="Write here..."
                  className="h-10 border border-[#C4CAD4] !rounded-lg"
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 6 }}>
              <Form.Item
                label="Serial No"
                name="serialNumber"
                tooltip="Here you have to input the doctor's serial number."
                rules={[{ required: true, message: "Serial no is required" }]}
              >
                <Input
                  type="number"
                  placeholder="Write here..."
                  className="h-10 border border-[#C4CAD4] !rounded-lg"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label="Contact Number"
                name="contactNumber"
                tooltip="Here you have to input the doctor's contact number."
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Write here..."
                  className="h-10 border border-[#C4CAD4] !rounded-lg"
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item label="Email Address" name="email">
                <Input
                  type="email"
                  placeholder="Write here..."
                  className="h-10 border border-[#C4CAD4] !rounded-lg"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                label="Department"
                name="department"
                tooltip="Here you have to input the doctor's department."
                rules={[{ required: true, message: "Department is required" }]}
              >
                <Select
                  showSearch
                  placeholder="Select from here..."
                  options={interestOptions}
                  className="h-10 *:!rounded-lg !bg-transparent"
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                label="Specialty"
                name="specialty"
                tooltip="Here you have to input the doctor's specialty."
                rules={[{ required: true, message: "Specialty is required" }]}
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
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                label="Degree"
                name="degree"
                tooltip="What's the degree of the doctor."
                rules={[{ required: true, message: "Degree is required" }]}
              >
                <Input.TextArea
                  placeholder="Write here..."
                  className="border border-[#C4CAD4] !rounded-lg"
                  rows={4}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item label="Address" name="address">
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
              <p className="font-medium mb-1.5">Doctor Image</p>
              <UploadImageWithPreview setFile={setFile} />
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
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Loading..." : "Update Doctor"}
              </button>
            </div>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateDoctor;
