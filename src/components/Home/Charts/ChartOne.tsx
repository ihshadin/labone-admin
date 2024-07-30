import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  colors: ["#0a8848", "#80CAEE"],
  stroke: {
    curve: "smooth",
    width: 2.3,
  },
  chart: {
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 0,
    colors: "#0a8848",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 0,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 1,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      rotateAlways: true,
      rotate: -45,
      style: {
        fontSize: "12px",
        fontWeight: 300,
        colors: [
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
          "#00263E",
        ],
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
  },
};

const ChartOne = () => {
  const series = [
    {
      name: "Appointments",
      data: [30, 65, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ];

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-white px-5 sm:px-8 pt-5 pb-5 shadow-default xl:col-span-7">
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3">
        <div className="flex flex-wrap w-full gap-3 sm:gap-5">
          <div className="flex items-center gap-2">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            <p className="font-semibold text-primary grow">
              Total Appointments
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter gap-2 *:rounded-md *:py-1 *:px-3 *:text-xs *:font-medium *:bg-primary *:text-white [&_*:hover]:bg-primary/80">
            <button>Day</button>
            <button>Week</button>
            <button>Month</button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-mx-3 -mb-9">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
