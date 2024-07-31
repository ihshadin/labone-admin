import { Modal } from "antd";
import { TViewAppointmentModal } from "../../types/appointment.type";

const AppointmentDetails = ({
  viewDetailsModalOpen,
  setViewDetailsModalOpen,
  appointmentData,
}: TViewAppointmentModal) => {
  return (
    <>
      <Modal
        title={null}
        centered
        open={viewDetailsModalOpen}
        onOk={() => setViewDetailsModalOpen(false)}
        onCancel={() => setViewDetailsModalOpen(false)}
        width={700}
        footer={null}
      >
        <h1 className="text-lg font-semibold">Appointment Details</h1>
        <div className="flex justify-center items-center gap-6 pb-4 pt-6 ">
          <div className="w-full">
            <div className="flex items-center font-medium border-b py-2">
              <p className="w-2/4">Patient Name</p>
              <div className="flex items-center  gap-2">
                <p>{appointmentData?.patientName}</p>
              </div>
            </div>
            <div className="flex items-center font-medium border-b py-2">
              <p className="w-2/4 ">Appointment Date</p>
              <div className="flex items-center  gap-2">
                <p>{appointmentData?.appointmentDate}</p>
              </div>
            </div>
            <div className="flex items-center font-medium border-b py-2">
              <p className="w-2/4 ">Patient Mobile</p>
              <div className="flex items-center  gap-2">
                <p>{appointmentData?.mobileNumber}</p>
              </div>
            </div>
            <div className="flex items-center font-medium border-b py-2">
              <p className="w-2/4 ">Patient Address</p>
              <div className="flex items-center  gap-2">
                <p>{appointmentData?.address}</p>
              </div>
            </div>
            <div className="flex items-center font-medium   border-b py-4">
              <p className="w-2/4">Appointment Status</p>
              <p className="capitalize">{appointmentData?.status}</p>
            </div>

            <div className="flex items-center font-medium   border-b py-4">
              <p className="w-2/4 ">Doctor Name</p>{" "}
              {appointmentData?.doctorID?.firstName}{" "}
              {appointmentData?.doctorID?.lastName}{" "}
            </div>
            <div className="font-medium border-b py-2">
              <p className="w-2/4 ">Patient Message</p>{" "}
              <p>{appointmentData?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full mb-2">
          <button
            className="cursor-pointer border py-1.5 px-4 font-medium rounded-lg "
            onClick={() => setViewDetailsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AppointmentDetails;
