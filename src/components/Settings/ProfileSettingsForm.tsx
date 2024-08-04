/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Col, Form, Input, Row } from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import { LuUploadCloud } from "react-icons/lu";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { TProfile } from "../../types/profileSetting.type";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";

const ProfileSettingsForm = () => {
  const { data } = useGetUserQuery(undefined);
  const user = data?.data;
  const [isLoading, setIsLoading] = useState(false);
  const [userUpdate] = useUpdateUserMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TProfile) => {
    const toastId = toast.loading("Adding new doctor...");

    const profileData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
    };

    try {
      const res = await userUpdate(profileData).unwrap();
      if (res?.success) {
        setIsLoading(true);

        toast.success("Profile Information change Successfully", {
          id: toastId,
        });
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      firstName: user?.firstName,
      lastName: user?.lastName,
    });
  }, []);
  console.log(user);
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
                  rules={[
                    { required: true, message: "First Name is required" },
                  ]}
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
                    placeholder={user?.email}
                    disabled
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <p className="font-medium mb-1.5">Profile Image</p>
                <UploadImageWithPreview
                  setFile={setFile}
                  aspectRatio={1 / 1}
                  defaultImage={user?.photo}
                  ratioName="oneOne"
                />
              </Col>
            </Row>

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
