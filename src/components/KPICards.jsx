function KPICards({ cards }) {
  return (
    <div className="kpi-grid">
      {cards.map((card) => (
        <div className={`kpi-card ${card.theme}`} key={card.title}>
          <div className="kpi-top">
            <div className="kpi-icon">
              <i className={`bi ${card.icon}`}></i>
            </div>
            <span className="kpi-change">
              <i className="bi bi-arrow-up-short"></i>{card.change}
            </span>
          </div>
          <div className="kpi-label">{card.title}</div>
          <div className="kpi-value">{card.value}</div>
          <div className="kpi-period">{card.period || "vs. previous period"}</div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;