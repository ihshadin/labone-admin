/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { TMachine } from "../../types/machine.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useAddDiagnosticMachineMutation } from "../../redux/features/diagonisticMachine/diagonisticMachineApi";

const DiagnosticsEntryFormMachines = () => {
  const [addDiagnosticMachine] = useAddDiagnosticMachineMutation();

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();

  const onSubmit = async (data: TMachine) => {
    const toastId = toast.loading("Add New Machine info...");

    let imageLink;
    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const machineNewData = {
      name: data.name,
      country: data.country,
      details: data.details,
      photo: imageLink,
    };

    try {
      const res = await addDiagnosticMachine(machineNewData).unwrap();

      if (res?.success) {
        setIsLoading(true);
        toast.success("Successfully added the Diagnostic Machine", { id: toastId });
        form.resetFields();
        setFile([]);
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
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
                  label="Machine Name"
                  name="name"
                  tooltip="Here you have to input the machine name."
                  rules={[
                    { required: true, message: "Machine Name is required" },
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
                  aspectRatio={4 / 3}
                  ratioName="fourThree"
                />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="flex items-center justify-end w-full gap-2">
                  <button
                    className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                    type="submit"
                    disabled={isLoading ? true : false}
                  >
                    {isLoading ? "Loading..." : "Add New Diagnostics Machine"}
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default DiagnosticsEntryFormMachines;
