import { FaAngleRight } from "react-icons/fa6";
import {
  useDeleteBannerMutation,
  useGetAllBannersQuery,
} from "../../redux/features/banner/bannerApi";
import { TBanner } from "../../types/banner.type";
import { Popconfirm } from "antd";

const BannerList = () => {
  const { data } = useGetAllBannersQuery(undefined);
  const [deleteBanner] = useDeleteBannerMutation();

  // console.log(data);

  // const handleDelete = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="flex flex-col gap-5 border rounded-xl mt-2.5 px-5 py-7">
      {data?.data?.result?.map((banner: TBanner) => (
        <div
          key={banner?._id}
          className="relative w-full h-[500px] bg-cover bg-center rounded-xl group"
          style={{
            backgroundImage: `url(${banner?.bgImage})`,
          }}
        >
          {/* Delete Button */}
          <Popconfirm
            title="Delete the Banner"
            description="Are you sure to delete this Banner?"
            placement="topLeft"
            onConfirm={() => deleteBanner(banner?._id)}
            okText="Yes"
            cancelText="No"
          >
            <button className="absolute top-4 left-4 bg-red-600 hover:bg-red-600/80 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300">
              Delete
            </button>
          </Popconfirm>

          {/* Content */}
          <div className="w-full max-w-[1250px] mx-auto px-2 py-14 h-full flex flex-col md:flex-row justify-between items-center opacity-100 group-hover:opacity-40 transition-opacity duration-300">
            <div className="md:w-[50%] flex flex-col justify-center">
              {/* <h2 className="text-left text-[#058946] font-bold text-4xl md:text-[50px] leading-[1.1]">
                Lab One Hospital
                <span className="text-[#dc3545] block">Your Health,</span>
                Our Focus
              </h2> */}
              <h2 className="text-left text-[#058946] font-bold text-4xl md:text-[50px] leading-[1.1]">
                {banner?.title.split('"')[0]}
                <span className="text-[#dc3545] block">
                  {banner?.title.split('"')[1]}
                </span>
                {banner?.title.split('"')[2]}
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
