/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import { LuUploadCloud } from "react-icons/lu";
import { toast } from "sonner";
import { TDoctor } from "../../types/doctor.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { useAddDoctorMutation } from "../../redux/features/doctor/doctorApi";
import { useGetAllDepartmentQuery } from "../../redux/features/department/departmentApi";

type Interest = {
  _id: string;
  name: string;
};

const DoctorRegForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [addDoctor] = useAddDoctorMutation(undefined);
  const { data } = useGetAllDepartmentQuery(undefined);

  const onSubmit = async (data: TDoctor) => {
    const formData = new FormData();
    const toastId = toast.loading("Adding new doctor...");

    const doctorNewData = {
      firstName: data.firstName,
      lastName: data.lastName,
      serialNumber: data.contactNumber,
      image: data.contactNumber,
      email: data.email,
      department: data.department,
      specialization: data.specialization,
      degree: data.degree,
      address: data.address,
      contactNumber: data.address,
      departmentID: data.address,
    };
    console.log({ doctorNewData });

    formData.append("file", file[0]?.originFileObj);
    formData.append("data", JSON.stringify(doctorNewData));

    try {
      // addDoctor();
      setIsLoading(true);
      toast.success("Successfully added the doctor", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  // const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
  //   setFile(newFileList);
  // };

  const interestOptions = data?.data?.result?.map((int: Interest) => ({
    value: int?._id,
    label: int?.name,
  }));
  // console.log(interests)

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
                  rules={[
                    { required: true, message: "Department is required" },
                  ]}
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

            {/* <Row>
              <div className="w-full pb-4">
                <p className="font-medium mb-1.5">Doctor Image</p>
                <Dragger onChange={handleChange} maxCount={1}>
                  <div className="flex justify-center py-4">
                    <p className="border shadow px-2 py-3 w-16 flex items-center justify-center rounded">
                      <LuUploadCloud fontSize={27} />
                    </p>
                  </div>
                  <p className="font-medium tracking-[2px]">Click to upload</p>
                  <p className="pb-2">
                    Drag & drop or select a photo from your computer.
                  </p>
                </Dragger>
              </div>
            </Row> */}

            <Row>
              <div className="flex items-center justify-end w-full">
                <button
                  className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Loading..." : "Add Doctor"}
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default DoctorRegForm;
