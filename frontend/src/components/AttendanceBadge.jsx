export default function AttendanceBadge({ status }) {
  const colors = {
    Present: 'success',
    Absent: 'danger',
    Pending: 'warning',
    Verified: 'success',
    Failed: 'danger',
    Active: 'primary'
  };

  return (
    <span className={`badge bg-${colors[status] || 'secondary'}`}>
      {status}
    </span>
  );
}