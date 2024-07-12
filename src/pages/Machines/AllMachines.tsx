import { Link } from "react-router-dom";
import AllMachinesList from "../../components/Machines/AllMachinesList";

const AllMachines = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>All Machine</span>
        </div>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
        <AllMachinesList />
      </section>
    </>
  );
};

export default AllMachines;
