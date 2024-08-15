import { useState } from "react";
import { Link } from "react-router-dom";
import NoticeSection from "../../components/Banner&Notice/NoticeSection";
import BannerSection from "../../components/Banner&Notice/BannerSection";

const BannersNotices = () => {
  const [activeTab, setActiveTab] = useState("banner");

  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Banners & Notice</span>
        </div>
      </section>
      <section className="mt-5">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("banner")}
            className={`bg-white hover:bg-primary/5 text-primary border border-primary/20 hover:border-primary/60 px-4 py-2 rounded-xl transition duration-150 ${
              activeTab === "banner" && "!bg-primary/5 !border-primary/60"
            }`}
          >
            Banner Content
          </button>
          <button
            onClick={() => setActiveTab("notice")}
            className={`bg-white hover:bg-primary/5 text-primary border border-primary/20 hover:border-primary/60 px-4 py-2 rounded-xl transition duration-150 ${
              activeTab === "notice" && "!bg-primary/5 !border-primary/60"
            }`}
          >
            Notice Content
          </button>
        </div>
        {activeTab === "banner" && <BannerSection />}
        {activeTab === "notice" && <NoticeSection />}
      </section>
    </>
  );
};

export default BannersNotices;
