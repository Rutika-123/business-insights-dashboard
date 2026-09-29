export function SalesTrendChart() {
  const values = [16, 21, 18, 27, 25, 34];
  const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  const points = values.map((v, i) => `${i * 20}%,${100 - v * 2.45}%`).join(" ");

  return (
    <div className="chart-card large-chart">
      <div className="card-heading">
        <div>
          <h3>Sales Trend</h3>
          <span>Monthly sales performance</span>
        </div>
        <button className="mini-select">Last 6 Months <i className="bi bi-chevron-down"></i></button>
      </div>
      <div className="line-chart">
        <div className="y-labels"><span>40K</span><span>30K</span><span>20K</span><span>10K</span><span>0</span></div>
        <div className="chart-area">
          {[0,1,2,3,4].map((n) => <div className="grid-line" style={{top: `${n * 25}%`}} key={n}></div>)}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="trend-svg">
            <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
            {values.map((v, i) => (
              <circle key={i} cx={`${i * 20}`} cy={100 - v * 2.45} r="1.8" fill="currentColor" />
            ))}
          </svg>
          <div className="x-labels">
            {labels.map((label) => <span key={label}>{label} 2026</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RegionChart() {
  return (
    <div className="chart-card">
      <div className="card-heading">
        <div>
          <h3>Sales by Region</h3>
          <span>Contribution to total sales</span>
        </div>
        <button className="card-menu"><i className="bi bi-three-dots"></i></button>
      </div>
      <div className="donut-wrap">
        <div className="donut">
          <div className="donut-center"><strong>$124.5K</strong><span>Total Sales</span></div>
        </div>
        <div className="legend">
          {[
            ["North America", "32%"],
            ["Europe", "24%"],
            ["Asia Pacific", "18%"],
            ["Latin America", "14%"],
            ["Middle East & Africa", "12%"],
          ].map(([name, value], i) => (
            <div className="legend-row" key={name}>
              <span><i className={`legend-dot dot-${i}`}></i>{name}</span><strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CategoryChart() {
  const data = [
    ["Electronics", 38],
    ["Fashion", 28],
    ["Home & Living", 21],
    ["Sports", 15],
    ["Books", 12],
  ];
  return (
    <div className="chart-card">
      <div className="card-heading"><div><h3>Sales by Category</h3><span>Category revenue comparison</span></div></div>
      <div className="bar-chart">
        {data.map(([label, value]) => (
          <div className="bar-item" key={label}>
            <div className="bar-value">${value}K</div>
            <div className="bar-track"><div className="bar-fill" style={{height: `${value * 2.1}%`}}></div></div>
            <div className="bar-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopProductsChart() {
  const products = [["Laptop Pro 14", "$28,450"], ["Wireless Headset", "$22,310"], ["Smart Monitor", "$18,760"], ["Office Chair", "$12,540"], ["Fitness Watch", "$8,210"]];
  return (
    <div className="chart-card">
      <div className="card-heading"><div><h3>Top 10 Products</h3><span>Products ranked by sales</span></div></div>
      <div className="ranking-list">
        {products.map(([name, value], index) => (
          <div className="ranking-row" key={name}>
            <span className="rank">{index + 1}</span>
            <div className="rank-main"><div className="rank-name">{name}</div><div className="rank-track"><div className="rank-fill" style={{width: `${100 - index * 15}%`}}></div></div></div>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopCustomersChart() {
  const customers = [["Acme Corporation", "$14,820"], ["Global Retail Ltd.", "$12,460"], ["BlueSky Systems", "$10,930"], ["Prime Office Co.", "$9,870"], ["Vertex Solutions", "$8,540"]];
  return (
    <div className="chart-card">
      <div className="card-heading"><div><h3>Top 10 Customers</h3><span>Highest-value customers</span></div></div>
      <div className="customer-list">
        {customers.map(([name, value], index) => (
          <div className="customer-row" key={name}>
            <div className="customer-rank">{index + 1}</div>
            <div className="customer-avatar">{name.charAt(0)}</div>
            <div className="customer-name">{name}<small>Customer account</small></div>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShipModeChart() {
  const modes = [["Standard Class", 47], ["Second Class", 28], ["First Class", 18], ["Same Day", 7]];
  return (
    <div className="chart-card">
      <div className="card-heading"><div><h3>Ship Mode Distribution</h3><span>Order fulfillment mix</span></div></div>
      <div className="ship-list">
        {modes.map(([name, value]) => (
          <div key={name} className="ship-row">
            <div className="ship-label"><span>{name}</span><strong>{value}%</strong></div>
            <div className="progress"><div className="progress-bar" style={{width: `${value * 2}%`}}></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecentOrders() {
  const orders = [
    ["ORD10249", "John Smith", "North America", "$2,450", "Delivered"],
    ["ORD10248", "Sarah Lee", "Europe", "$1,230", "Shipped"],
    ["ORD10247", "Michael Brown", "Asia Pacific", "$980", "Delivered"],
    ["ORD10246", "Emily Davis", "Latin America", "$1,760", "Processing"],
    ["ORD10245", "David Wilson", "Middle East & Africa", "$2,310", "Shipped"],
  ];
  return (
    <div className="chart-card recent-orders">
      <div className="card-heading"><div><h3>Recent Orders</h3><span>Latest customer transactions</span></div><button className="text-button">View all <i className="bi bi-arrow-right"></i></button></div>
      <div className="table-responsive">
        <table className="table dashboard-table">
          <thead><tr><th>Order ID</th><th>Customer</th><th>Region</th><th>Sales</th><th>Status</th></tr></thead>
          <tbody>{orders.map((o) => <tr key={o[0]}><td>{o[0]}</td><td>{o[1]}</td><td>{o[2]}</td><td><strong>{o[3]}</strong></td><td><span className={`status ${o[4].toLowerCase()}`}>{o[4]}</span></td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}