import KPICards from "../components/KPICards";
import { SalesTrendChart, RegionChart, RecentOrders } from "../components/Charts";

function CustomerAnalysis() {
  const cards = [
    { title: "Total Customers", value: "6,721", change: "+10.2%", icon: "bi-people", theme: "purple" },
    { title: "New Customers", value: "1,248", change: "+14.6%", icon: "bi-person-plus", theme: "blue" },
    { title: "Repeat Customers", value: "3,486", change: "+7.8%", icon: "bi-arrow-repeat", theme: "green" },
    { title: "Customer Revenue", value: "$98,420", change: "+11.4%", icon: "bi-wallet2", theme: "orange" },
  ];

  return (
    <>
      <KPICards cards={cards} />
      <div className="insight-banner">
        <i className="bi bi-stars"></i>
        <div><strong>Customer Insight</strong><span>Repeat customers currently contribute a large share of revenue. Use the filters to explore customer segments.</span></div>
      </div>
      <div className="chart-grid two-columns">
        <SalesTrendChart />
        <RegionChart />
      </div>
      <div className="chart-grid one-column">
        <RecentOrders />
      </div>
    </>
  );
}

export default CustomerAnalysis;