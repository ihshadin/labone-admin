import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import { LuUploadCloud } from "react-icons/lu";
import { toast } from "sonner";
import { TForgetPass } from "../../types/forgetPass.type";


const UpdatePassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [file, setFile] = useState<any>([]);
    const [form] = Form.useForm();
  
    const onSubmit = async (data: TForgetPass) => {
      const formData = new FormData();
      const toastId = toast.loading("Update Password...");
  
      const updatePassData = {
        newPassword : data.newPassword,
        confirmPassword : data.confirmPassword,
      };
      console.log({updatePassData});
  
    //   formData.append("file", file[0]?.originFileObj);
      formData.append("data", JSON.stringify(updatePassData));
  
      try {
        setIsLoading(true);
        toast.success("Password Change Successfully", { id: toastId });
      } catch (error: any) {
        toast.error(error.message, { id: toastId });
      } finally {
        setIsLoading(false);
      }
    };
    // console.log({ file });
    // const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    //   setFile(newFileList);
    // };
  
    return (
      <div>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              onFinish={onSubmit}
              requiredMark={false}
              layout="vertical"
            >
            <Row gutter={16}>
                <Col span={24} md={{ span: 24 }}>
                <Form.Item
                    label="New Password"
                    name="newPassword"
                    tooltip="Here you have to input your New Password."
                    rules={[{ required: true, message: "New Password is required" }]}
                  >
                    <Input.Password
                      type="password"
                      placeholder="********"
                      className="h-10 border border-[#C4CAD4] !rounded-lg"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} md={{ span: 24 }}>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    tooltip="Here you have to input your Confirm Password."
                    rules={[{ required: true, message: "Confirm Password is required" }]}
                  >
                    <Input.Password
                      type="password"
                      placeholder="********"
                      className="h-10 border border-[#C4CAD4] !rounded-lg"
                    />
                     
                  </Form.Item>
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
      </div>
    );
};

export default UpdatePassword;