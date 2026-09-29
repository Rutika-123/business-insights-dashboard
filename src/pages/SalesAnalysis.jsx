import KPICards from "../components/KPICards";
import { SalesTrendChart, RegionChart, CategoryChart, TopProductsChart, TopCustomersChart, ShipModeChart, RecentOrders } from "../components/Charts";

function SalesAnalysis() {
  const cards = [
    { title: "Total Sales", value: "$124,532", change: "+12.5%", icon: "bi-currency-dollar", theme: "blue" },
    { title: "Total Orders", value: "8,942", change: "+8.3%", icon: "bi-cart3", theme: "green" },
    { title: "Average Order Value", value: "$13.93", change: "+4.8%", icon: "bi-receipt", theme: "purple" },
    { title: "Total Customers", value: "6,721", change: "+10.2%", icon: "bi-people", theme: "orange" },
  ];

  return (
    <>
      <div className="filter-row">
        <button className="filter-control">Date Range <strong>Last 6 Months</strong><i className="bi bi-chevron-down"></i></button>
        <button className="filter-control">Region <strong>All Regions</strong><i className="bi bi-chevron-down"></i></button>
        <button className="filter-control">Category <strong>All Categories</strong><i className="bi bi-chevron-down"></i></button>
        <button className="filter-control">Product <strong>All Products</strong><i className="bi bi-chevron-down"></i></button>
      </div>

      <KPICards cards={cards} />

      <div className="chart-grid two-columns">
        <SalesTrendChart />
        <RegionChart />
      </div>

      <div className="chart-grid three-columns">
        <CategoryChart />
        <TopProductsChart />
        <TopCustomersChart />
      </div>

      <div className="chart-grid two-columns">
        <ShipModeChart />
        <RecentOrders />
      </div>
    </>
  );
}

export default SalesAnalysis;