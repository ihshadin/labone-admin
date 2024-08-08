/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Col, Form, Input, Row, Select, Modal, Divider } from "antd";
import { toast } from "sonner";
import { TDoctor, TUpdateDoctor } from "../../types/doctor.type";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { useGetAllDepartmentQuery } from "../../redux/features/department/departmentApi";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { useUpdateDoctorMutation } from "../../redux/features/doctor/doctorApi";
import { TDepartment } from "./DoctorRegForm";

const UpdateDoctor = ({
  updateModalOpen,
  setUpdateModalOpen,
  doctorData,
}: TUpdateDoctor) => {
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const { data } = useGetAllDepartmentQuery(undefined);
  const [updateDoctor] = useUpdateDoctorMutation();

  const onSubmit = async (data: TDoctor) => {
    const toastId = toast.loading("Updating doctor info...");

    let imageLink;

    if (file) {
      imageLink = await uploadImageInCloudinary(file, toastId);
    }

    const doctorNewData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      serialNumber: Number(data?.serialNumber),
      image: imageLink ? imageLink : doctorData?.image,
      email: data?.email,
      specialization: data?.specialization,
      degree: data?.degree,
      address: data?.address,
      contactNumber: data?.contactNumber,
      departmentID: data?.department
        ? data.department
        : doctorData?.departmentID?._id,
    };

    // console.log({ doctorNewData });

    const updateInfo = {
      id: doctorData?._id,
      data: doctorNewData,
    };

    try {
      const res = await updateDoctor(updateInfo).unwrap();

      if (res?.success) {
        setUpdateModalOpen(false);
        toast.success("Successfully updated the doctor", { id: toastId });
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
    }
  };

  // const interestOptions = [
  //   { value: "Travel", label: "Travel" },
  //   { value: "Food and Cooking", label: "Food and Cooking" },
  //   { value: "Fitness and Health", label: "Fitness and Health" },
  //   { value: "Music", label: "Music" },
  //   { value: "Art and Design", label: "Art and Design" },
  //   { value: "Reading", label: "Reading" },
  //   { value: "Technology", label: "Technology" },
  //   { value: "Sports", label: "Sports" },
  //   { value: "Gardening", label: "Gardening" },
  //   { value: "Movies and TV Shows", label: "Movies and TV Shows" },
  //   { value: "Photography", label: "Photography" },
  //   { value: "Writing", label: "Writing" },
  //   { value: "Gaming", label: "Gaming" },
  //   { value: "Fashion", label: "Fashion" },
  //   { value: "DIY Projects", label: "DIY Projects" },
  //   { value: "Learning Languages", label: "Learning Languages" },
  //   { value: "Social Media", label: "Social Media" },
  //   { value: "Volunteering", label: "Volunteering" },
  //   { value: "Pets", label: "Pets" },
  //   { value: "Outdoors", label: "Outdoors" },
  // ];

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(doctorData);
  }, [doctorData]);

  const departmentOptions = data?.data?.result?.map((int: TDepartment) => ({
    value: int?._id,
    label: int?.name,
  }));

  return (
    <>
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
            Details of the doctor
          </h2>
          <Divider plain className="!my-1">
            Edit doctor's info
          </Divider>
        </div>
        <Form
          form={form}
          initialValues={doctorData}
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
                rules={[{ required: true, message: "First Name is required" }]}
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
            <Col span={24} md={{ span: 24 }}>
              <Form.Item
                tooltip="Here you have to input the doctor's email."
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
          </Row>

          <Row gutter={16}>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label="Contact Number"
                name="contactNumber"
                tooltip="Here you have to input the doctor's contact number."
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  type="number"
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
          </Row>

          <Row gutter={16}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                label="Department"
                name="department"
                tooltip="Here you have to input the doctor's department."
              >
                <Select
                  showSearch
                  placeholder="Select from here..."
                  options={departmentOptions}
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
          </Row>

          <Row>
            <Col span={24}>
              <p className="font-medium mb-1.5">Doctor Image</p>
              <UploadImageWithPreview
                defaultImage={doctorData?.image}
                setFile={setFile}
              />
            </Col>
          </Row>

          <Row>
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
                Update Doctor
              </button>
            </div>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateDoctor;
