import { Link } from "react-router-dom";
import AllDoctorsList from "../../components/Doctors/AllDoctorsList";
import { LuCornerRightDown } from "react-icons/lu";

const AllDoctors = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>All Doctors</span>
        </div>
        <Link
          to="/add-doctor"
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="Return Home"
        >
          <span>Add Doctor</span>
          <LuCornerRightDown />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
        <AllDoctorsList />
      </section>
    </>
  );
};

export default AllDoctors;
