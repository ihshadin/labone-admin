/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Row, Select, TimePicker } from "antd";
import { toast } from "sonner";
import { useGetAllDiagnosticDoctorsQuery } from "../../redux/features/diagnosticDoctor/diagnosticDoctorApi";
import { useAddDiagnosticScheduleMutation } from "../../redux/features/diagnosticSchedules/diagnosticSchedulesApi";
import { Days } from "./DiagnosticSchedules.constant";

export type TDoctor = {
  _id: string;
  firstName: string;
  lastName: string;
};

const DiagnosticDoctorSchedulesRegForm = () => {
  const [form] = Form.useForm();
  const [addDiagnosticSchedules] = useAddDiagnosticScheduleMutation();
  const { data, isLoading: isDataLoading } =
    useGetAllDiagnosticDoctorsQuery(undefined);

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Adding new doctor...");

    const doctorNewData = {
      doctorID: data?.doctorID,
      scheduleDay: data?.day,
      startTime: data?.startTime,
      endTime: data?.endTime,
    };
    try {
      const res = await addDiagnosticSchedules(doctorNewData).unwrap();
      if (res?.success) {
        toast.success("Successfully added the Diagnostic Schedules", {
          id: toastId,
        });
        form.resetFields();
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
    }
  };

  const allDoctors = data?.data?.result?.map((doctor: TDoctor) => ({
    value: doctor?._id,
    label: `${doctor?.firstName} ${doctor?.lastName}`,
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
                  name="doctorID"
                  tooltip="Here you have select doctor's."
                  rules={[{ required: true, message: "Doctor is required" }]}
                >
                  <Select
                    loading={isDataLoading}
                    showSearch
                    placeholder="Select from here..."
                    options={allDoctors}
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
                    options={Days}
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
                >
                  Add Diagnostic Doctor Schedule
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default DiagnosticDoctorSchedulesRegForm;
