import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

type StatisticsPageProps = {
  pageHeading: string;
  PageIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconStyle: string;
  totalAmount: number;
} & (
  | {
      upBy: number;
      downBy?: never;
    }
  | {
      upBy?: never;
      downBy: number;
    }
);

const DashboardStats = ({
  pageHeading,
  PageIcon,
  totalAmount,
  upBy,
  downBy,
  iconStyle,
}: StatisticsPageProps) => {
  totalAmount = totalAmount > 1000 ? totalAmount / 1000 : totalAmount;

  return (
    <div className="rounded-md w-full py-4 px-2 flex justify-start items-center  bg-primary-bg mb-4 md:mb-0">
      <div className={`rounded-full font-bold ${iconStyle} p-4`}>
        <PageIcon fontSize="large" />
      </div>
      <div className="pl-4 items-start">
        <h5 className="text-light-text-sc text-xs font-semibold">
          {pageHeading}
        </h5>
        <span>
          <h1 className="font-bold text-xl tracking-wide">
            &#36;{totalAmount}K
          </h1>
        </span>
        <div>
          {upBy ? (
            <span className="flex  text-xs ">
              <p className="text-up-accent font-semibold">
                <ArrowUpwardOutlinedIcon fontSize="inherit" />
                {upBy} &#37;
              </p>
              <p>&nbsp;this month</p>
            </span>
          ) : (
            <span className="flex  text-xs">
              <p className="text-down-accent font-semibold">
                <ArrowDownwardOutlinedIcon fontSize="inherit" />
                {downBy} &#37;
              </p>
              <p>&nbsp;this month</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default DashboardStats;
