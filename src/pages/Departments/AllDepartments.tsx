import { Link } from "react-router-dom";
import { LuCornerRightDown } from "react-icons/lu";
import DepartmentsList from "../../components/Departments/DepartmentsList";

const AllDepartments = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>All Departments</span>
        </div>
        <Link
          to="/add-department"
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="Add Department"
        >
          <span>Add Department</span>
          <LuCornerRightDown />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full">
        <DepartmentsList />
      </section>
    </>
  );
};

export default AllDepartments;
