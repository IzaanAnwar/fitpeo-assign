import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ExpandDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // You can hide the legend if you don't need it
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide the x-axis grid lines
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false, // You can choose to display y-axis grid lines
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings of last 12 Months",
      data: [60, 50, 100, 70, 80, 40, 80, 100, 90, 70, 50, 70],
      backgroundColor: "#bababa",
      hoverBackgroundColor: "#7232e9",
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

const EarningOverview = () => {
  return (
    <div className="p-4 rounded-md  bg-primary-bg">
      <div className="flex justify-between items-center py-4">
        <span className="px-2">
          <h3 className="font-semibold">Overview</h3>
          <p className="text-xs text-light-text-sc">Monthly Earning</p>
        </span>
        <span className="px-2 flex justify-around text-xs text-light-text-sc items-center">
          <p>Quaterly</p>
          <ExpandDownIcon fontSize="small" />
        </span>
      </div>
      <div className="max-w-screen md:min-w-fit">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
export default EarningOverview;
