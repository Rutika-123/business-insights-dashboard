import KPICards from "../components/KPICards";
import { CategoryChart, TopProductsChart, SalesTrendChart, ShipModeChart } from "../components/Charts";

function ProductAnalysis() {
  const cards = [
    { title: "Active Products", value: "1,284", change: "+5.2%", icon: "bi-box-seam", theme: "blue" },
    { title: "Best-Selling Product", value: "Laptop Pro 14", change: "+18.4%", icon: "bi-trophy", theme: "green" },
    { title: "Top Category", value: "Electronics", change: "+12.1%", icon: "bi-grid", theme: "purple" },
    { title: "Product Revenue", value: "$124,532", change: "+12.5%", icon: "bi-currency-dollar", theme: "orange" },
  ];

  return (
    <>
      <KPICards cards={cards} />
      <div className="chart-grid two-columns">
        <CategoryChart />
        <TopProductsChart />
      </div>
      <div className="chart-grid two-columns">
        <SalesTrendChart />
        <ShipModeChart />
      </div>
    </>
  );
}

export default ProductAnalysis;