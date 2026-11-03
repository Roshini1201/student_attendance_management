export default function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <div className="card stat-card h-100">
      <div className="card-body d-flex justify-content-between">
        <div>
          <p className="text-muted mb-2">{title}</p>
          <h3 className="fw-bold">{value}</h3>
          <small className="text-muted">{subtitle}</small>
        </div>

        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}