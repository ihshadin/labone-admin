/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Divider, Form, Modal, Row, Select, TimePicker } from "antd";
import { toast } from "sonner";
import { TSchedule, TUpdateSchedule } from "../../types/schedule.type";
import { Dayes, formatTime } from "./DiagnosticSchedules.constant";
import { TDoctor } from "./DiagnosticDoctorSchedulesRegForm";
import { useGetAllDiagnosticDoctorsQuery } from "../../redux/features/diagnosticDoctor/diagnosticDoctorApi";
import { useUpdateDiagnosticScheduleMutation } from "../../redux/features/diagnosticSchedules/diagnosticSchedulesApi";

const UpdateDiagnosticSchedule = ({
  updateModalOpen,
  setUpdateModalOpen,
  scheduleData,
}: TUpdateSchedule) => {
  const [form] = Form.useForm();

  const { data, isLoading: isDataLoading } = useGetAllDiagnosticDoctorsQuery(undefined);
  const [updateDiagnosticSchedule] = useUpdateDiagnosticScheduleMutation();

  const onSubmit = async (data: TSchedule) => {
    const toastId = toast.loading("Updating Schedule info...");

    const updatedData = {
      doctorID: data?.doctorID ? data?.doctorID : scheduleData?.doctorID?._id,
      scheduleDay: data?.scheduleDay
        ? data?.scheduleDay
        : scheduleData?.scheduleDay,
      startTime: data?.startTime
        ? formatTime(data?.startTime)
        : formatTime(scheduleData?.startTime),
      endTime: data?.endTime
        ? formatTime(data?.endTime)
        : formatTime(scheduleData?.endTime),
    };

    // console.log("update doctor data", updatedData);

    const updateInfo = {
      id: scheduleData?._id,
      data: updatedData,
    };

    try {
      const res = await updateDiagnosticSchedule(updateInfo).unwrap();
      if (res?.success) {
        setUpdateModalOpen(false);
        toast.success("Successfully updated the Diagnostic schedule", {
          id: toastId,
        });
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
    <Modal
      title={null}
      centered
      open={updateModalOpen}
      onOk={() => setUpdateModalOpen(false)}
      onCancel={() => setUpdateModalOpen(false)}
      width={700}
      footer={null}
    >
      <div className="text-center mb-10">
        <h2 className="text-primary text-xl font-semibold">
          Details of the Diagnostic Schedule
        </h2>
        <Divider plain className="!my-1">
          Edit Diagnostic Schedule's infos
        </Divider>
      </div>
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
              name="scheduleDay"
              tooltip="Here you have select day"
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
              Update Diagnostic Schedule
            </button>
          </div>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateDiagnosticSchedule;
