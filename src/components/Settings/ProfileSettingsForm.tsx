import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import { LuUploadCloud } from "react-icons/lu";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { TProfile } from "../../types/profileSetting.type";

const ProfileSettingsForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<any>([]);
    const [form] = Form.useForm();
  
    const onSubmit = async (data: TProfile) => {
      const formData = new FormData();
      const toastId = toast.loading("Adding new doctor...");
  
      const profileData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      console.log({ profileData});
  
      formData.append("file", file[0]?.originFileObj);
      formData.append("data", JSON.stringify(profileData));
  
      try {
        setIsLoading(true);
        toast.success("Profile Information change Successfully", { id: toastId });
      } catch (error: any) {
        toast.error(error.message, { id: toastId });
      } finally {
        setIsLoading(false);
      }
    };
    console.log({ file });
    // const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    //   setFile(newFileList);
    // };
  
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
                    tooltip="Here you have to input your first name."
                    rules={[{ required: true, message: "First Name is required" }]}
                  >
                    <Input
                      type="text"
                      placeholder="Write here..."
                      className="h-10 border border-[#C4CAD4] !rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col span={24} md={{ span: 12 }}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    tooltip="Here you have to input your last name."
                    rules={[{ required: true, message: "Last name is required" }]}
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
                <Col span={24} md={{ span: 24 }}>
                  <Form.Item label="Email Address" name="email">
                    <Input
                      type="email"
                      placeholder="labone@gmail.com"
                      disabled
                      className="h-10 border border-[#C4CAD4] !rounded-lg"
                    />
                  </Form.Item>
                </Col>
              </Row>
  
              <Row>
                <Col span={24}>
                  <p className="font-medium mb-1.5">Profile Image</p>
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
                    {isLoading ? "Loading..." : "Save Changes"}
                  </button>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </>
    );
};

export default ProfileSettingsForm;