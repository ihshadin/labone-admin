import { FaAngleRight } from "react-icons/fa6";

const BannerList = () => {
  return (
    <>
      <div
        className="relative w-full h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${"http://localhost:3000/_next/static/media/Bannar-backg.8a7a5487.png"})`,
        }}
      >
        <div className="w-full max-w-[1250px] mx-auto px-2 py-14 h-full flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[50%] flex flex-col justify-center">
            <h2 className="text-left text-[#058946] font-bold text-4xl md:text-[65px] leading-[1.1]">
              Lab One Hospital
              <span className="text-[#dc3545] block">Your Health,</span>
              Our Focus
            </h2>
            <div>
              <p className="text-base text-left text-accent mt-3 md:mt-7 mb-[18px] max-w-[550px]">
                Ensuring your optimal health through dedicated, compassionate
                care and advanced medical treatments is our mission
              </p>
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#07CCEC] hover:bg-gradient-to-br text-white flex items-center gap-1 duration-300 transition-all group">
                Appointment
                <FaAngleRight className="group-hover:translate-x-1.5 duration-300" />
              </button>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img
              src={
                "http://localhost:3000/_next/static/media/Bannar-backg.8a7a5487.png"
              }
              alt="LabOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerList;
