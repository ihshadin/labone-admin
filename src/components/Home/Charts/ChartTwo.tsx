import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { LuCornerRightUp } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useGetDepartmentDataQuery } from "../../../redux/features/meta/metaApi";

// interface ChartTwoState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

const ChartTwo = () => {
  const { data } = useGetDepartmentDataQuery(undefined);

  const options: ApexOptions = {
    colors: ["#0a8848", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: data?.data?.map((item: Record<string, unknown>) => item.name),
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    {
      name: "Department Doctors",
      data: data?.data?.map((item: Record<string, unknown>) => item.count),
    },
  ];

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="flex justify-between mb-3 sm:mb-5">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary">
            <span className="block h-2.5 w-2.5 rounded-full bg-primary"></span>
          </span>
          <p className="font-semibold text-primary grow">Department Doctors</p>
        </div>
        <Link
          to={"/all-doctors"}
          className="flex items-center gap-1 leading-[1rem]"
        >
          See All Doctors
          <LuCornerRightUp size={13} />
        </Link>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
