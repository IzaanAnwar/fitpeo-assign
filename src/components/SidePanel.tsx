import SettingsIcon from "@mui/icons-material/TuneOutlined";
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ProductsIcon from "@mui/icons-material/Inventory2Outlined";
import CustomersIcon from "@mui/icons-material/AccountBoxOutlined";
import IncomeIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PromoteIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import HelpIcon from "@mui/icons-material/LiveHelpOutlined";
import ExpandArrowIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ExpandDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const SidePanel = () => {
  return (
    <div className="hidden md:flex flex-col justify-between text-xs w-1/2 md:w-[24%] lg:w-[20%] bg-accent-primary min-h-screen text-left text-light-text-sc p-4 ">
      <div>
        <div className="font-semibold py-2 px-4 text-light-text-pr flex justify-start items-center">
          <SettingsIcon />
          <h2 className="px-2 text-lg ">Dashboard</h2>
        </div>
        <div className="flex justify-between items-center py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100 ">
          <span>
            <DashboardIcon />
            <a href="#" className="px-2">
              Dashboard
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>

        <div className="flex justify-between py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100">
          <span>
            <ProductsIcon />
            <a href="#" className="px-2">
              Products
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>
        <div className="flex justify-between py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100">
          <span>
            <CustomersIcon />
            <a href="#" className="px-2">
              Customers
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>
        <div className="flex justify-between py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100">
          <span>
            <IncomeIcon />
            <a href="#" className="px-2">
              Income
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>
        <div className="flex justify-between py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100">
          <span>
            <PromoteIcon />
            <a href="#" className="px-2">
              Promote
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>
        <div className="flex justify-between py-2 rounded-md px-4 hover:bg-accent-hover hover:text-light-text-pr duration-100">
          <span>
            <HelpIcon />
            <a href="#" className="px-2">
              Help
            </a>
          </span>
          <ExpandArrowIcon fontSize="inherit" />
        </div>
      </div>
      <div className="rounded-md p-2 flex justify-between items-center hover:bg-accent-hover hover:text-light-text-pr duration-100">
        <span className="flex justify-start items-center">
          <img
            src="/dummy-usr.png"
            alt="User"
            className="rounded-full w-[28%] h-[28%] md:w-[24%]  md:h-[24%] lg:w-[16%] lg-h[16%]"
          />
          <div className="px-2">
            <h6 className="font-semibold text-light-text-pr">Evanto</h6>
            <p className="text-light-text-sc text-xs ">Project Manager</p>
          </div>
        </span>
        <ExpandDownIcon fontSize="small" />
      </div>
    </div>
  );
};

export default SidePanel;
