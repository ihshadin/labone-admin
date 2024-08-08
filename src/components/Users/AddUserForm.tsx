import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { TUsers } from "../../types/user.type";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";

export type Interest = {
  _id: string;
  name: string;
};

const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TUsers) => {
    const toastId = toast.loading("Adding new user...");

    let imageLink;
    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const userNewData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      image: imageLink,
      email: data?.email,
      password: data?.password,
    };
    try {
      const res = await addUser (userNewData);
      if (res) {
        setIsLoading(true);
        toast.success("Successfully added the doctor", { id: toastId });
        form.resetFields();
        setFile([]);
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsLoading(false);
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
                  label="First Name"
                  name="firstName"
                  tooltip="Here you have to input the doctor's first name."
                  rules={[
                    { required: true, message: "First Name is required" },
                  ]}
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
                  label="Last Name"
                  name="lastName"
                  tooltip="Here you have to input the doctor's last name."
                  rules={[{ required: true, message: "Last Name is required" }]}
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

            <Row gutter={16}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  tooltip="Here you have to input the user email."
                  rules={[{ required: true, message: "Email is required" }]}
                  label="Email Address"
                  name="email"
                >
                  <Input
                    type="email"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Password"
                  name="Password"
                  tooltip="Here you have to input the user password."
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password
                    type="password"
                    placeholder="********"
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            {/* <Row gutter={16}>
                <Col span={24} md={{ span: 12 }}>
                  <Form.Item
                    label="Password"
                    name="Password"
                    tooltip="Here you have to input the user password."
                    rules={[
                      { required: true, message: "Password is required" },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Write here..."
                      className="h-10 border border-[#C4CAD4] !rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col span={24} md={{ span: 12 }}>
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
              </Row> */}

            {/* <Row gutter={16}>
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
                  name="specialization"
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
            </Row> */}

            <Row>
              <Col span={24}>
                <p className="font-medium mb-1.5">User Image</p>
                
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
                  {isLoading ? "Loading..." : "Add User"}
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddUserForm;
