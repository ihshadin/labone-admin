import { Link } from "react-router-dom";
import DataContainer from "../../components/Home/DataContainer";
import ChartOne from "../../components/Home/Charts/ChartOne";
import ChartTwo from "../../components/Home/Charts/ChartTwo";
import RecentAppointments from "../../components/Home/RecentAppointments";
import { LuCornerRightUp } from "react-icons/lu";
import LiveSchedule from "../../components/Home/LiveSchedule";
import LiveTimer from "../../components/Home/LiveTimer";

const Home = () => {
  return (
    <>
      <section className="flex justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Dashboard</span>
        </div>
      </section>
      <div className="mt-5 md:mt-8">
        <DataContainer />
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-5 my-3 md:my-5">
        <ChartOne />
        <ChartTwo />
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-5">
        <section className="bg-white/40 bg-blend-color-burn border p-5 rounded-xl col-span-12 xl:col-span-5">
          <div className="flex justify-between mb-3 sm:mb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
              <p className="font-semibold text-primary grow">
                Recent Appointments
              </p>
            </div>
            <Link
              to={"/all-appointments"}
              className="flex items-center gap-1 leading-[1rem]"
            >
              See All
              <LuCornerRightUp size={13} />
            </Link>
          </div>
          <>
            <RecentAppointments />
          </>
        </section>

        <section className="bg-white/40 bg-blend-color-burn border p-5 rounded-xl col-span-12 xl:col-span-7">
          <div className="flex justify-between mb-3 sm:mb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
              <p className="font-semibold text-primary grow">Live Schedules</p>
            </div>
            <LiveTimer />
          </div>
          <div>
            <LiveSchedule />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
