import { FaAngleRight } from "react-icons/fa6";
import { useGetAllBannersQuery } from "../../redux/features/banner/bannerApi";
import { TBanner } from "../../types/banner.type";

const BannerList = () => {
  const { data } = useGetAllBannersQuery(undefined);
  console.log(data);
  return (
    <div className="flex flex-col gap-5 border rounded-xl mt-2.5 px-5 py-7">
      {data?.data?.result?.map((banner: TBanner) => (
        <div
          key={banner?._id}
          className="relative w-full h-[700px] bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url(${banner?.bgImage})`,
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
                  {banner?.shortDesc}
                </p>
                <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#07CCEC] hover:bg-gradient-to-br text-white flex items-center gap-1 duration-300 transition-all group">
                  Call Us
                  <FaAngleRight className="group-hover:translate-x-1.5 duration-300" />
                </button>
              </div>
            </div>
            <div className="md:w-[50%]">
              {banner?.rightImage && (
                <img src={banner?.rightImage} alt="LabOne" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerList;
