import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaUserDoctor } from "react-icons/fa6";
import { LuCalendarClock, LuCalendarSearch, LuGitBranch } from "react-icons/lu";
import { GrVirtualMachine } from "react-icons/gr";
import { BiUserPlus } from "react-icons/bi";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom CSS
import "./DataContainer.css";
import { useGetMetaDataQuery } from "../../redux/features/meta/metaApi";

const DataContainer = () => {
  const { data } = useGetMetaDataQuery(undefined);

  const items = [
    {
      title: "Total Appointments",
      quentity: data?.data?.totalAppointments,
      icon: <LuCalendarClock />,
    },
    {
      title: "Pending Appointments",
      quentity: data?.data?.totalPendingAppointments,
      icon: <LuCalendarSearch />,
    },
    {
      title: "Total Doctors",
      quentity: data?.data?.totalDoctors,
      icon: <FaUserDoctor />,
    },
    {
      title: "Total Machines",
      quentity: data?.data?.totalMachines,
      icon: <GrVirtualMachine />,
    },
    {
      title: "Total Departments",
      quentity: data?.data?.totalDepartments,
      icon: <LuGitBranch />,
    },
    {
      title: "Total Schedules",
      quentity: data?.data?.totalSchedules,
      icon: <BiUserPlus />,
    },
  ];

  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.title}>
            {({ isActive }) => (
              <div
                className={`py-5 px-5 rounded-xl ${
                  isActive ? "bg-primary" : "bg-[#0a884919] "
                }`}
              >
                <div
                  className={`text-xs md:text-2xl mb-2 bg-slate-100 h-12 w-12 flex justify-center items-center rounded-full font-medium ${
                    isActive ? "text-primary" : "text-[#475467] "
                  }`}
                >
                  {item.icon}
                </div>
                <p
                  className={`text-xs md:text-sm font-medium ${
                    isActive ? "text-[#e6e6e6]" : "text-[#475467] "
                  }`}
                >
                  {item.title}
                </p>
                <h4
                  className={`text-2xl md:text-3xl font-semibold ${
                    isActive ? "text-white" : "text-primary"
                  }`}
                >
                  {item.quentity}
                </h4>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DataContainer;
