function DashboardHeader({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <div className="breadcrumb-text">Business Insights / {activePage}</div>
        <h1>{activePage}</h1>
        <p>Monitor business performance and discover actionable insights.</p>
      </div>

      <div className="topbar-actions">
        <div className="updated-info d-none d-md-flex">
          <i className="bi bi-calendar3"></i>
          <div>
            <small>Last Updated</small>
            <span>29 Sep 2026, 10:45 AM</span>
          </div>
        </div>

        <button className="icon-button" title="Notifications">
          <i className="bi bi-bell"></i>
          <span className="notification-dot"></span>
        </button>

        <div className="profile-chip">
          <div className="avatar">R</div>
          <span className="d-none d-lg-inline">Business Analyst</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;