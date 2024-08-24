import { useState } from "react";
import { Link } from "react-router-dom";
import LabPhotos from "../../components/Photos/LabPhotos";
import NicuPhotos from "../../components/Photos/NicuPhotos";
import OparationTheater from "../../components/Photos/OparationTheater";
import Reception from "../../components/Photos/Reception";
import Radiology from "../../components/Photos/Radiology";
import Emergency from "../../components/Photos/Emergency";
import { useGetSinglePhotosQuery } from "../../redux/features/photos/photosApi";
import Pharmacy from "../../components/Photos/Pharmacy";
import ItDepartment from "../../components/Photos/ItDepartment";

const photosTabs = [
  { label: "Lab Photos", key: "labPhotos" },
  { label: "NICU Photos", key: "nicuPhotos" },
  { label: "OT Photos", key: "otPhotos" },
  { label: "Reception Photos", key: "receptionPhotos" },
  { label: "Radiology Imaging Photos", key: "radiologyImagingPhotos" },
  { label: "Emergency Unit Photos", key: "emergencyUnitPhotos" },
  { label: "Pharmacy Photos", key: "pharmacyPhotos" },
  { label: "IT Dept Photos", key: "iTDeptPhotos" },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("labPhotos");
  const { data } = useGetSinglePhotosQuery("66c9d4ff2b1c51fc3bd6abbc");
  console.log(data?.data?.result);
  const renderTabContent = () => {
    switch (activeTab) {
      case "labPhotos":
        return (
          <LabPhotos data={data?.data?.result?.labPhotos} field={"labPhotos"} />
        );
      case "nicuPhotos":
        return (
          <NicuPhotos
            data={data?.data?.result?.nicuPhotos}
            field={"nicuPhotos"}
          />
        );
      case "otPhotos":
        return (
          <OparationTheater
            data={data?.data?.result?.otPhotos}
            field={"otPhotos"}
          />
        );
      case "receptionPhotos":
        return (
          <Reception
            data={data?.data?.result?.receptionPhotos}
            field={"receptionPhotos"}
          />
        );
      case "radiologyImagingPhotos":
        return (
          <Radiology
            data={data?.data?.result?.radiologyImagingPhotos}
            field={"radiologyImagingPhotos"}
          />
        );
      case "emergencyUnitPhotos":
        return (
          <Emergency
            data={data?.data?.result?.emergencyUnitPhotos}
            field={"emergencyUnitPhotos"}
          />
        );
      case "pharmacyPhotos":
        return (
          <Pharmacy
            data={data?.data?.result?.emergencyUnitPhotos}
            field={"pharmacyPhotos"}
          />
        );
      case "iTDeptPhotos":
        return (
          <ItDepartment
            data={data?.data?.result?.emergencyUnitPhotos}
            field={"iTDeptPhotos"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>About us department sliders</span>
        </div>
      </section>
      <section className="mt-5">
        <div className="flex gap-2">
          {photosTabs.map((tabItem) => (
            <button
              key={tabItem?.key}
              onClick={() => setActiveTab(tabItem?.key)}
              className={`bg-white hover:bg-primary/5 text-primary border border-primary/20 hover:border-primary/60 px-4 py-2 rounded-xl transition duration-150 ${
                activeTab === tabItem?.key && "!bg-primary/5 !border-primary/60"
              }`}
            >
              {tabItem?.label}
            </button>
          ))}
        </div>
        {/* Content area */}
        {renderTabContent()}
      </section>
    </>
  );
};

export default AboutUs;
