import { Divider } from "antd";
import { Link } from "react-router-dom";
import HeroSection from "../../components/Home/HeroSection";
import DataContainer from "../../components/Home/DataContainer";
import ChartOne from "../../components/Home/Charts/ChartOne";
import ChartTwo from "../../components/Home/Charts/ChartTwo";

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
      <div className="flex gap-5">
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-[60%] ">
        <div className="">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!mt-0">
            Welcome to Labone Hospital
          </Divider>
        </div>
        <div className="mt-8 md:mt-10">
          <HeroSection />
        </div>
      </section>

      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-[40%]  ">
        <div className="">
          {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
          <Divider orientation="left" className="!mt-0">
            Welcome to Labone Hospital
          </Divider>
        </div>
        <div className="mt-8 md:mt-10">
          <HeroSection />
        </div>
      </section>
      </div>
      
      <div className="mt-8 md:mt-10">
        <DataContainer />
      </div>
      <div className="mt-8 grid grid-cols-12 gap-4 md:mt-10 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

export default Home;
