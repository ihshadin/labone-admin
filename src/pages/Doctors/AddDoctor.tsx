import { Divider } from "antd";
import { Link } from "react-router-dom";

const AddDoctor = () => {
  return (
    <>
      <section className="flex justify-between">
        <h2 className="text-primary text-xl font-semibold">Add Doctor</h2>
        <div className="text-base">
          <Link to="/" className="text-primary">
            Lab One
          </Link>{" "}
          / Add Doctor
        </div>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 rounded-xl w-full max-w-[800px] mx-auto">
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
      </section>
    </>
  );
};

export default AddDoctor;
