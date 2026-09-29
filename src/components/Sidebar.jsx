const menuItems = [
  { name: "Sales Analysis", icon: "bi-graph-up-arrow" },
  { name: "Customer Analysis", icon: "bi-people" },
  { name: "Product Analysis", icon: "bi-box-seam" },
];

function Sidebar({ activePage, onPageChange }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <i className="bi bi-bar-chart-fill"></i>
        </div>
        <div>
          <div className="brand-title">Business</div>
          <div className="brand-subtitle">Insights</div>
        </div>
      </div>

      <div className="sidebar-label">ANALYTICS</div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`sidebar-item ${activePage === item.name ? "active" : ""}`}
            onClick={() => onPageChange(item.name)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
            {activePage === item.name && <i className="bi bi-chevron-right ms-auto"></i>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="sidebar-item">
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </button>
        <div className="sidebar-user">
          <div className="avatar">R</div>
          <div className="user-info">
            <strong>Business User</strong>
            <small>Analytics Team</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;