import { Divider } from "antd";
import { Link } from "react-router-dom";
import DoctorRegForm from "../../components/Doctors/DoctorRegForm";

const AddDoctor = () => {
  return (
    <>
      <section className="flex justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Add Doctor</span>
        </div>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[800px] mx-auto">
        <div className=" text-center">
          <h2 className="text-primary text-xl font-semibold">
            Doctor Registration Form
          </h2>
          <Divider plain>Add New Doctor</Divider>
          <p>
            If already added on quick addition form. do not add here again. just
            edit that from the doctor list
          </p>
        </div>
        <div className="mt-8 md:mt-10">
          <DoctorRegForm />
        </div>
      </section>
    </>
  );
};

export default AddDoctor;
