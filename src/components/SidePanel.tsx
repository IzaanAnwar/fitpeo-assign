import SettingsIcon from "@mui/icons-material/TuneOutlined";
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ProductsIcon from "@mui/icons-material/Inventory2Outlined";
import CustomersIcon from "@mui/icons-material/AccountBoxOutlined";
import IncomeIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PromoteIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import HelpIcon from "@mui/icons-material/LiveHelpOutlined";
const SidePanel = () => {
  return (
    <div className="text-sm w-1/2 md:w-[20%] bg-accent-primary min-h-screen text-left text-light-text-sc p-4 flex flex-col justify-between">
      <div>
        <div className="font-semibold py-2 px-4 text-light-text-pr flex justify-start items-center">
          <SettingsIcon />
          <h2 className="px-2 text-lg ">Dashboard</h2>
        </div>
        <div className="flex justify-start items-center py-2 rounded-md px-4 hover:bg-accent-hover ">
          <DashboardIcon />
          <a href="#" className="px-2">
            Dashboard
          </a>
        </div>

        <div className="flex justify-start py-2 rounded-md px-4 hover:bg-accent-hover">
          <ProductsIcon />
          <a href="#" className="px-2">
            Products
          </a>
        </div>
        <div className="flex justify-start py-2 rounded-md px-4 hover:bg-accent-hover">
          <CustomersIcon />
          <a href="#" className="px-2">
            Customers
          </a>
        </div>
        <div className="flex justify-start py-2 rounded-md px-4 hover:bg-accent-hover">
          <IncomeIcon />
          <a href="#" className="px-2">
            Income
          </a>
        </div>
        <div className="flex justify-start py-2 rounded-md px-4 hover:bg-accent-hover">
          <PromoteIcon />
          <a href="#" className="px-2">
            Promote
          </a>
        </div>
        <div className="flex justify-start py-2 rounded-md px-4 hover:bg-accent-hover">
          <HelpIcon />
          <a href="#" className="px-2">
            Help
          </a>
        </div>
      </div>
      <div className="rounded-md px-4 py-2 flex justify-start items-center hover:bg-accent-hover">
        <img
          src="/dummy-usr.png"
          alt="User"
          className="rounded-full w-[32%] md:w-[16%] h-[32%] md:h-[16%]"
        />
        <div className="px-4">
          <h6 className="font-semibold text-light-text-pr">Evanto</h6>
          <p className="text-light-text-sc text-xs md:text-sm">
            Project Manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
