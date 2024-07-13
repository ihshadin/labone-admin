import { useState } from "react";
import { Modal } from "antd";
import { TViewAppointmentModal } from "../../types/appointment.type";

const AppointmentDetails = ({
  viewDetailsModalOpen,
  setViewDetailsModalOpen,
  appointmentData,
}: TViewAppointmentModal) => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(appointmentData);
  console.log(isLoading);
  console.log(() => setIsLoading(true));

  return (
    <>
      <Modal
        title={null}
        centered
        open={viewDetailsModalOpen}
        onOk={() => setViewDetailsModalOpen(false)}
        onCancel={() => setViewDetailsModalOpen(false)}
        width={1000}
        footer={null}
      >
        details
      </Modal>
    </>
  );
};

export default AppointmentDetails;
