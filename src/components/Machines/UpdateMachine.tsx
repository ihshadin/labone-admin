/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { TMachine, TUpdateMachine } from "../../types/machine.type";
import { Col, Divider, Form, Input, Modal, Row } from "antd";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { toast } from "sonner";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useUpdateMachineMutation } from "../../redux/features/machine/machineApi";

const UpdateMachine = ({
  updateModalOpen,
  setUpdateModalOpen,
  machineData,
}: TUpdateMachine) => {
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [updateMachine] = useUpdateMachineMutation();

  const onSubmit = async (data: TMachine) => {
    const toastId = toast.loading("Updating Machine info...");
    let imageLink;

    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const updatedData = {
      name: data?.name,
      country: data?.country,
      details: data?.details,
      photo: imageLink ? imageLink : data?.photo,
    };

    const updateInfo = {
      id: machineData?._id,
      data: updatedData,
    };

    try {
      const res = await updateMachine(updateInfo).unwrap();

      if (res?.success) {
        setUpdateModalOpen(false);
        toast.success("Successfully updated the machine", { id: toastId });
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
    }
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(machineData);
  }, [machineData]);

  return (
    <Modal
      title={null}
      centered
      open={updateModalOpen}
      onOk={() => setUpdateModalOpen(false)}
      onCancel={() => setUpdateModalOpen(false)}
      width={1000}
      footer={null}
    >
      <div className="text-center mb-10">
        <h2 className="text-primary text-xl font-semibold">
          Details of the machine
        </h2>
        <Divider plain className="!my-1">
          Edit machine's info
        </Divider>
      </div>
      <Form
        form={form}
        initialValues={machineData}
        onFinish={onSubmit}
        requiredMark={false}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              label="Machine Name"
              name="name"
              tooltip="Here you have to input the machine name."
              rules={[{ required: true, message: "Machine Name is required" }]}
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
              label="Machine Origin"
              name="country"
              tooltip="Here you have to input the machine Origin."
              rules={[
                { required: true, message: "Machine Origin is required" },
              ]}
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
          <Col span={24}>
            <Form.Item
              label="Machine Details"
              name="details"
              tooltip="Describe about the machine."
              rules={[{ required: true, message: "Details is required" }]}
            >
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
            <UploadImageWithPreview
              setFile={setFile}
              defaultImage={machineData.photo}
              aspectRatio={4 / 3}
              ratioName="fourThree"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
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
        
              >
                Update Machine
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateMachine;
