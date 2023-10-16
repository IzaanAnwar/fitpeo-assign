import { SearchForm } from "./Navbar";
import ExpandDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const SalesReport = () => {
  return (
    <div>
      <nav className="flex justify-between md:grid  md:grid-cols-3 gap-2 md:gap-4 py-4 bg-primary-bg items-center rounded-t-md">
        <div className="md:col-span-2 px-2 md:px-4">
          <h3 className="font-semibold">Product Sell</h3>
        </div>
        <div className="md:grid md:grid-cols-3">
          <span className="hidden md:block col-span-1 md:col-span-2">
            <SearchForm />
          </span>
          <div className="col-span-1 flex items-center text-light-text-sc text-xs mx-2 px-2 rounded-md hover:bg-darker-bg duration-100">
            <p>Last 30 days</p>
            <ExpandDownIcon fontSize="small" />
          </div>
        </div>
      </nav>
      <section>
        <div className="grid grid-cols-3 text-xs text-light-text-sc bg-primary-bg py-2">
          <span className="col-span-2 px-4">
            <h5>Product Name</h5>
          </span>
          <span className="px-4 flex justify-between items-center">
            <span className="hidden md:block col-span-1">
              <h5>Stock</h5>
            </span>
            <span className="col-span-1">
              <h5>Price</h5>
            </span>
            <span className="hidden md:block col-span-1">
              <h5>Total Sales</h5>
            </span>
          </span>
        </div>
        <div>
          <hr />
          <ProductSaleInfo
            name="Abstract 3D"
            imageUrl="kimi-no-nawa.jpg"
            price={45.99}
            stock={40}
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            totalSold={20}
          />
          <ProductSaleInfo
            name="Abstract 3D"
            imageUrl="kimi-no-namaewa.jpg"
            price={45.99}
            stock={40}
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            totalSold={20}
          />
        </div>
      </section>
    </div>
  );
};

type ProductDetails = {
  //   id: string; [not useful for oour current purpose]
  name: string;
  imageUrl: string;
  price: number;
  about: string;
  stock: number;
  totalSold: number;
};
export const ProductSaleInfo = ({
  name,
  imageUrl,
  price,
  stock,
  totalSold,
  about,
}: ProductDetails) => {
  return (
    <div className="grid grid-cols-3 items-center py-4 bg-primary-bg text-sm rounded-b-md">
      <div className=" col-span-2 flex justify-start items-center px-4">
        <span className="w-[4rem] rounded-md">
          <img src={imageUrl} alt={name} className="w-[4rem] rounded-md" />
        </span>
        <div className="px-4">
          <h2 className="font-semibold">Abstract 3D</h2>
          <p className="text-light-text-sc text-xs">{about} </p>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center text-center">
        <span className="hidden md:block col-span-1">{stock} in Stocks</span>
        <span className="col-span-1 font-semibold"> &#36;{price}</span>
        <span className="hidden md:block col-span-1">{totalSold}</span>
      </div>
    </div>
  );
};
export default SalesReport;
