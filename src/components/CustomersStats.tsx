import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

type GardientColors = {
  st: string;
  qr?: string;
  hf: string;
  tqr?: string;
  en: string;
};
const getGradient = (chart: ChartJS, grColors: GardientColors) => {
  const {
    ctx,
    chartArea: { left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradientSegment.addColorStop(0, grColors.st);
  if (grColors.qr) {
    gradientSegment.addColorStop(0.25, grColors.qr);
  }
  gradientSegment.addColorStop(0.5, grColors.hf);
  if (grColors.tqr) {
    gradientSegment.addColorStop(0.75, grColors.tqr);
  }
  gradientSegment.addColorStop(1, grColors.en);
  return gradientSegment;
};

/** Mock Data For the Doughnut chart
 * (will be fethced from server in real world cases)
 */
export const data = {
  labels: ["New", "Exsiting"],
  datasets: [
    {
      label: "Total Customers",
      data: [6.5, 10, 10],

      backgroundColor: (context: any) => {
        const chart = context.chart as ChartJS;
        const { chartArea } = chart;
        if (!chartArea) {
          return;
        }
        if (context.dataIndex === 0) {
          const colors: GardientColors = {
            st: "#f33844",
            hf: "#f33870",
            en: "#F33898",
          };
          return getGradient(chart, colors);
        } else if (context.dataIndex === 1) {
          const colors: GardientColors = {
            st: "#b532e9",
            qr: "#9932e9",
            hf: "#8732e9",
            tqr: "#7232e9",
            en: "#5732e9",
          };
          return getGradient(chart, colors);
        } else {
          return "#bababa";
        }

        // ["#F33898", "#5732e9"];
      },
      borderColor: ["#F33898", "#5732e9", "#bababa"],
      borderWidth: 1,
    },
  ],
  textCenter: "65% Total New Customers",
};

const CustomerStats = () => {
  return (
    <div className="p-4 rounded-md bg-primary-bg">
      <div className="py-4">
        <span>
          <h3 className="font-semibold">Customers</h3>
          <p className="text-light-text-sc text-xs">
            Customer that buy products
          </p>
        </span>
      </div>
      <div className="max-w-screen md:min-w-fit relative">
        <Doughnut data={data} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center max-w-fit">
            <h1 className="text-lg font-bold">65%</h1>
            <p className="text-xs">Total New Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;
