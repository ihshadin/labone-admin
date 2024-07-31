import { Link } from "react-router-dom";
import { LuCornerRightDown } from "react-icons/lu";
import SchedulesList from "../../components/DoctorsSchedules/SchedulesList";

const AllSchedules = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>All Chamber Doctor's Schedules</span>
        </div>
        <Link
          to="/add-chamber-doctor"
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="Add Schedule"
        >
          <span>Add Schedule</span>
          <LuCornerRightDown />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full">
        <SchedulesList />
      </section>
    </>
  );
};

export default AllSchedules;
