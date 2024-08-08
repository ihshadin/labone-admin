/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { TChangePass } from "../../types/changPass.type";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const ChangePassForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [changePass] = useChangePasswordMutation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const passwordRules = [
    { required: true, message: "Password is required" },
    {
      validator(_: any, value: string) {
        if (!value) {
          return Promise.resolve();
        }
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (passwordRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error(
            "Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character",
          ),
        );
      },
    },
  ];

  const onSubmit = async (data: TChangePass) => {
    const toastId = toast.loading("Change Password...");

    const changePassData = {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
    };

    try {
      setIsLoading(true);
      const result: any = await changePass(changePassData);
      if (result?.error) {
        toast.error(result?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Password Change Successfully", { id: toastId });
        navigate("/login");
        localStorage.removeItem("accessToken");
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
      setIsLoading(false);
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
              <Col span={24} md={{ span: 24 }}>
                <Form.Item
                  label="Current Password"
                  name="currentPassword"
                  tooltip="Here you have to input your Current Password."
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Current Password is required!",
                    },
                  ]}
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
              <Col span={24}>
                <Form.Item
                  label="New Password"
                  name="newPassword"
                  tooltip="Here you have to input your new Password."
                  rules={passwordRules}
                  hasFeedback
                >
                  <Input.Password
                    type="password"
                    placeholder="********"
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  tooltip="Here you have to input your Confirm Password."
                  dependencies={["newPassword"]}
                  hasFeedback
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    { required: true, message: "Confirm Password is required" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match!"),
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="********"
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <div className="flex items-center justify-end w-full">
                <button
                  className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium text-white rounded-lg"
                  type="submit"
                  disabled={isLoading}
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

export default ChangePassForm;
