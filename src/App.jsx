import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Sales Analysis");
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [syncComplete, setSyncComplete] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! I'm your Business Insights Assistant. How can I help you analyze your business data?",
    },
  ]);

  const menuItems = [
    "Sales Analysis",
    "Customer Analysis",
    "Product Analysis",
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
    };

    const aiMessage = {
      type: "ai",
      text: "Based on the available dashboard data, I can help you analyze sales, customers, products, regions, and business trends.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setMessage("");
  };

  // UPDATE DATA FUNCTION
const handleUpdateData = () => {
  if (syncing) return;

  setSyncing(true);
  setSyncComplete(false);

  // Frontend simulation of sync endpoint
  setTimeout(() => {
    setSyncing(false);
    setSyncComplete(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSyncComplete(false);
    }, 3000);
  }, 2000);
};
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">BI</div>
          <div>
            <h2>Business</h2>
            <span>Insights</span>
          </div>
        </div>

        <div className="sidebar-title">ANALYTICS</div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`menu-item ${
                activeSection === item ? "active" : ""
              }`}
              onClick={() => setActiveSection(item)}
            >
              <span className="menu-dot"></span>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="data-status">
            <span className="status-dot"></span>
            <div>
              <strong>Data Connected</strong>
              <small>Last updated today</small>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* HEADER */}
        <header className="top-header">
          <div>
            <p className="breadcrumb">Business Insights / Dashboard</p>
            <h1>{activeSection}</h1>
            <p className="subtitle">
              Monitor and understand your business performance
            </p>
          </div>

       <div className="header-actions">

  <button
    className={`update-button ${syncing ? "syncing" : ""}`}
    onClick={handleUpdateData}
    disabled={syncing}
  >
    <span className={syncing ? "spin" : ""}>↻</span>

    {syncing ? "Updating..." : "Update Data"}
  </button>

  <button className="date-button">
    📅 Last 30 Days
  </button>

  <div className="profile">
              <div className="profile-avatar">R</div>
              <div>
                <strong>Rutika</strong>
                <span>Analyst</span>
              </div>
            </div>
          </div>
        </header>
        {syncComplete && (
  <div className="sync-success">
    ✓ Data updated successfully
  </div>
)}

        {/* KPI CARDS */}
        <section className="kpi-grid">

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Total Sales</span>
              <div className="kpi-icon sales">₹</div>
            </div>

            <h2>₹24.8L</h2>

            <p className="positive">
              ↑ 12.5% <span>vs previous period</span>
            </p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Total Orders</span>
              <div className="kpi-icon orders">▣</div>
            </div>

            <h2>3,842</h2>

            <p className="positive">
              ↑ 8.2% <span>vs previous period</span>
            </p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Average Order Value</span>
              <div className="kpi-icon average">↗</div>
            </div>

            <h2>₹6,455</h2>

            <p className="positive">
              ↑ 4.7% <span>vs previous period</span>
            </p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Profit</span>
              <div className="kpi-icon profit">%</div>
            </div>

            <h2>₹6.2L</h2>

            <p className="positive">
              ↑ 10.3% <span>vs previous period</span>
            </p>
          </div>

        </section>

        {/* CHARTS */}
        <section className="chart-grid">

          {/* SALES TREND */}
          <div className="panel large-panel">
            <div className="panel-header">
              <div>
                <h3>Sales Trend</h3>
                <p>Monthly sales performance</p>
              </div>

              <button className="small-button">Monthly ▾</button>
            </div>

            <div className="chart-area">

              <div className="y-axis">
                <span>₹10L</span>
                <span>₹8L</span>
                <span>₹6L</span>
                <span>₹4L</span>
                <span>₹2L</span>
                <span>₹0</span>
              </div>

              <div className="line-chart">

                <div className="grid-line line1"></div>
                <div className="grid-line line2"></div>
                <div className="grid-line line3"></div>
                <div className="grid-line line4"></div>
                <div className="grid-line line5"></div>

                <svg
                  viewBox="0 0 700 250"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,190 70,165 140,175 210,130 280,145 350,105 420,120 490,80 560,95 630,50 700,65"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="chart-line"
                  />

                  <polyline
                    points="0,230 70,215 140,220 210,195 280,205 350,180 420,190 490,160 560,170 630,145 700,155"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    className="chart-line-secondary"
                  />
                </svg>

                <div className="x-axis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                </div>
              </div>

            </div>

            <div className="chart-legend">
              <span>
                <i className="legend-current"></i>
                Current Period
              </span>

              <span>
                <i className="legend-previous"></i>
                Previous Period
              </span>
            </div>
          </div>

          {/* REGION */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <h3>Sales by Region</h3>
                <p>Regional performance</p>
              </div>
            </div>

            <div className="region-list">

              <div className="region-item">
                <div className="region-name">
                  <span>South</span>
                  <strong>₹8.4L</strong>
                </div>
                <div className="progress">
                  <div style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="region-item">
                <div className="region-name">
                  <span>West</span>
                  <strong>₹6.8L</strong>
                </div>
                <div className="progress">
                  <div style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="region-item">
                <div className="region-name">
                  <span>North</span>
                  <strong>₹5.7L</strong>
                </div>
                <div className="progress">
                  <div style={{ width: "58%" }}></div>
                </div>
              </div>

              <div className="region-item">
                <div className="region-name">
                  <span>East</span>
                  <strong>₹3.9L</strong>
                </div>
                <div className="progress">
                  <div style={{ width: "42%" }}></div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* BOTTOM PANELS */}
        <section className="bottom-grid">

          {/* TOP PRODUCTS */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <h3>Top Products</h3>
                <p>Highest selling products</p>
              </div>

              <button className="view-button">View All</button>
            </div>

            <div className="table">

              <div className="table-row table-header">
                <span>Product</span>
                <span>Sales</span>
                <span>Growth</span>
              </div>

              <div className="table-row">
                <span>Product Alpha</span>
                <strong>₹2.4L</strong>
                <em>+18%</em>
              </div>

              <div className="table-row">
                <span>Product Beta</span>
                <strong>₹2.1L</strong>
                <em>+14%</em>
              </div>

              <div className="table-row">
                <span>Product Gamma</span>
                <strong>₹1.8L</strong>
                <em>+11%</em>
              </div>

              <div className="table-row">
                <span>Product Delta</span>
                <strong>₹1.5L</strong>
                <em>+8%</em>
              </div>

            </div>
          </div>

          {/* TOP CUSTOMERS */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <h3>Top Customers</h3>
                <p>Highest value customers</p>
              </div>

              <button className="view-button">View All</button>
            </div>

            <div className="customer-list">

              <div className="customer">
                <div className="customer-avatar">AK</div>

                <div className="customer-info">
                  <strong>Arun Kumar</strong>
                  <span>24 orders</span>
                </div>

                <strong>₹1.42L</strong>
              </div>

              <div className="customer">
                <div className="customer-avatar">SP</div>

                <div className="customer-info">
                  <strong>Sneha Patel</strong>
                  <span>21 orders</span>
                </div>

                <strong>₹1.28L</strong>
              </div>

              <div className="customer">
                <div className="customer-avatar">RM</div>

                <div className="customer-info">
                  <strong>Rahul Mehta</strong>
                  <span>19 orders</span>
                </div>

                <strong>₹1.17L</strong>
              </div>

            </div>
          </div>

        </section>

      </main>

      {/* AI BUTTON */}
      <button
        className="ai-button"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <span>✦</span>
      </button>

      {/* CHATBOT */}
      {chatOpen && (
        <div className="chatbot">

          <div className="chat-header">
            <div className="chat-title">
              <div className="ai-avatar">✦</div>

              <div>
                <strong>Business AI</strong>
                <span>
                  <i></i> Online
                </span>
              </div>
            </div>

            <button onClick={() => setChatOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.type === "user" ? "user-message" : "ai-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          <div className="chat-input">

            <input
              type="text"
              placeholder="Ask about your business..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />

            <button onClick={handleSendMessage}>
              ➤
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;