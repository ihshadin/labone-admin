/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Row, Select, TimePicker } from "antd";
import { toast } from "sonner";

import { useAddDoctorMutation } from "../../redux/features/doctor/doctorApi";
import { useGetAllDepartmentQuery } from "../../redux/features/department/departmentApi";
import { Dayes, formatTime } from "./Schedules.constant";

export type Interest = {
  _id: string;
  name: string;
};

const DoctorSchedulesRegForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const [addDoctor] = useAddDoctorMutation();
  const { data } = useGetAllDepartmentQuery(undefined);

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Adding new doctor...");

    const doctorNewData = {
      doctorId: data?.doctorId,
      scheduleDay: data?.day,
      startTime: formatTime(data?.startTime),
      endTime: formatTime(data?.endTime),
    };
    console.log(doctorNewData);
    // try {
    //   const res = await addDoctor(doctorNewData);
    //   if (res) {
    //     setIsLoading(true);
    //     toast.success("Successfully added the doctor", { id: toastId });
    //     form.resetFields();
    //     setFile([]);
    //   } else {
    //     toast.error("Something want wrong!", { id: toastId });
    //   }
    // } catch (error: any) {
    //   toast.error(error.message, { id: toastId });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const interestOptions = data?.data?.result?.map((int: Interest) => ({
    value: int?._id,
    label: int?.name,
  }));

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
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <Form.Item
                  label="Select Doctor"
                  name="doctorId"
                  tooltip="Here you have select doctor's."
                  rules={[{ required: true, message: "Doctor is required" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select from here..."
                    // options={interestOptions}
                    options={Dayes}
                    className="h-10 *:!rounded-lg !bg-transparent"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <Form.Item
                  label="Select Schedule Day"
                  name="day"
                  tooltip="Here you have select day"
                  rules={[{ required: true, message: "Day is required" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select from here..."
                    options={Dayes}
                    className="h-10 *:!rounded-lg !bg-transparent"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Schedule Start Time"
                  name="startTime"
                  tooltip="Here you have select Start Time"
                  rules={[
                    { required: true, message: "Start Time is Required!" },
                  ]}
                >
                  <TimePicker
                    className="h-10 border border-[#C4CAD4] !rounded-lg w-full"
                    use12Hours
                    format="h:mm a"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Schedule End Time"
                  name="endTime"
                  tooltip="Here you have select End Time"
                  rules={[{ required: true, message: "End Time is Required!" }]}
                >
                  <TimePicker
                    className="h-10 border border-[#C4CAD4] !rounded-lg w-full"
                    use12Hours
                    format="h:mm a"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <div className="flex items-center justify-end w-full">
                <button
                  className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Loading..." : "Add Doctor Schedule"}
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default DoctorSchedulesRegForm;
