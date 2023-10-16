import DashboardStats from "./components/DashboardStats";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import EarningsIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import OrderBookIcon from "@mui/icons-material/LibraryBooksOutlined";
import BalanceAccountIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TotalSalesIcon from "@mui/icons-material/WorkOutlineOutlined";
import CustomerStats from "./components/CustomersStats";
import EarningOverview from "./components/EarningOverview";
// block lg:flex justify-between items-center px-2 md:px-12 py-4 md:py-6
function App() {
  return (
    <>
      <div className="block md:flex items-start">
        <SidePanel />
        <div className="w-full">
          <Navbar />
          <section className="px-2 md:px-12 py-4 md:py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              <div className="">
                <DashboardStats
                  pageHeading="Earnings"
                  PageIcon={EarningsIcon}
                  iconStyle="text-earning-primary bg-earning-secondary"
                  upBy={37.88}
                  totalAmount={100000}
                />
              </div>
              <div className="">
                <DashboardStats
                  pageHeading="Orders"
                  PageIcon={OrderBookIcon}
                  iconStyle="text-order-primary bg-order-secondary"
                  downBy={20.07}
                  totalAmount={2400}
                />
              </div>
              <div className="">
                <DashboardStats
                  pageHeading="Balance"
                  PageIcon={BalanceAccountIcon}
                  iconStyle="text-balance-primary bg-balance-secondary"
                  downBy={2}
                  totalAmount={2400}
                />
              </div>
              <div className="">
                <DashboardStats
                  pageHeading="Total Sales"
                  PageIcon={TotalSalesIcon}
                  iconStyle="text-sales-primary bg-sales-secondary"
                  upBy={10}
                  totalAmount={89000}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="md:col-span-2">
                <EarningOverview />
              </div>
              <div className="col-span-1">
                <CustomerStats />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
