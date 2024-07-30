import { Divider } from "antd";
import { Link } from "react-router-dom";
import { LuCornerRightUp } from "react-icons/lu";
import DoctorSchedulesRegForm from "../../components/DoctorsSchedules/DoctorSchedulesRegForm";

const AddDoctorSchedules = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Add Doctor Schedules</span>
        </div>
        <Link
          to="/all-doctors-schedules"
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="All Doctors Schedules"
        >
          <span>All Doctors Schedules</span>
          <LuCornerRightUp />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[800px] mx-auto">
        <div className=" text-center">
          <h2 className="text-primary text-xl font-semibold">
            Doctor Schedules Registration Form
          </h2>
          <Divider plain>Add New Doctor Schedules</Divider>
          <p>
            If already added on quick addition form. do not add here again. just
            edit that from the doctor list
          </p>
        </div>
        <div className="mt-8 md:mt-10">
          <DoctorSchedulesRegForm />
        </div>
      </section>
    </>
  );
};

export default AddDoctorSchedules;
