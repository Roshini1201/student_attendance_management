
import { Bell, UserCircle } from 'lucide-react';

export default function Navbar({ name = 'User' }) {
  return (
    <nav className="top-navbar">
      <div>
        <h6 className="mb-1">Welcome back, {name} 👋</h6>
        <small>Here's what's happening with your attendance today.</small>
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="notification-btn">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-info">
          <UserCircle size={32} />
          <div>
            <strong>{name}</strong>
            <small>Active Account</small>
          </div>
        </div>
      </div>
    </nav>
  );
}
